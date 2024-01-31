"use client";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Stack, TextField, Typography } from "@mui/material";
import Button from "@/components/library/buttons/root_button/RootButton";
import styled from "@emotion/styled";
import Container from "@/components/library/Container";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import usePublicAPI from "@/hooks/usePublicAPI";
import Lottie from "lottie-react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RegisterAnim from "../../assets/regiAnim"
import Magnetic from "@/components/library/Magnetic";

// customized TextField
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#21366c",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#21366c",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const Register = () => {
  const publicAPI = usePublicAPI();

  const router = useRouter();
  const { from } = router.query || { from: "/dashboard" };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const onChange = (value) => {
    setCaptchaValue(value);
  };

  // submit register form
  const onSubmit = async (data) => {
    if (data.password != data.confirmPassword) {
      setError("Password does not match");
      return;
    }
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        updateUserProfile(data.name);

        const userInfo = {
          userID: loggedUser.uid,
          email: loggedUser.email,
          name: loggedUser.displayName,
          createdAt: loggedUser.metadata.creationTime,
          balance: 1000000,
          portfolio: [],
        };

        publicAPI.post("/all-users", userInfo).then((res) => {
          Swal.fire({
            title: "Account created successfully!",
            text: `Welcome to NexTrade`,
            icon: "success",
          });
          router.push("/");
          reset;
        });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("This email is already in use");
          return;
        }
        setError(error.message);
        reset;
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const loggedUser = res.user;

        const userInfo = {
          userID: loggedUser.uid,
          email: loggedUser.email,
          name: loggedUser.displayName,
          createdAt: loggedUser.metadata.creationTime,
          balance: 1000000,
          portfolio: [],
        };

        publicAPI.post("/all-users", userInfo).then((res) => {
          Swal.fire({
            title: "Log In successful!",
            text: `Welcome back ${loggedUser.displayName}`,
            icon: "success",
          });
          router.push(from);
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: "Log In failed!",
          text: `Please try again`,
          icon: "error",
        });
        reset;
      });
  };

  return (
    <Container className="flex flex-col  xl:flex-row-reverse justify-around items-center min-h-[100vh] relative">
      <Magnetic>
        <Link href="/" className="text-primary font-semibold flex items-center gap-3 absolute top-10 right-0 z-10"><ArrowBackIcon />Home</Link>
      </Magnetic>
      <Lottie className="w-full xl:w-[40%]" animationData={RegisterAnim} loop={true} />
      <Stack
        gap={2}
        className="border-2 shadow-2xl shadow-primary rounded-md p-4 md:p-6 2xl:px-14 2xl:py-12 w-full md:w-4/5 lg:w-4/5 xl:w-[50%] 2xl:w-2/5"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <Typography
            variant="h2"
            mb={2}
            fontWeight="bold"
            className="text-primary"
            sx={{ fontSize: ["28px", "28px", "42px"] }}
          >
            Create Account
          </Typography>
          <Typography className="text-lg lg:text-xl text-primary">
            Have an account?{" "}
            <Link href="/login" className=" font-bold hover:underline">
              Login here
            </Link>
          </Typography>

          {/* Google Captcha */}

          <div className="mb-3 mt-4 flex justify-center">
            <ReCAPTCHA
              sitekey="6LelPTApAAAAADWVe8dSbkcjltECOr38kOEygA9u"
              onChange={onChange}
            />
          </div>

          <Stack mt={4} gap={3}>
            {/* user name */}
            <CssTextField
              {...register("name", { required: true })}
              required
              fullWidth
              id="standard-number-input"
              label="Name"
              type="text"
              variant="standard"
            />
            {errors.name && (
              <span className="text-red-700">Name is required !</span>
            )}

            {/* email */}
            <CssTextField
              {...register("email", { required: true })}
              required
              fullWidth
              id="standard-required"
              label="Email"
              type="email"
              variant="standard"
            />
            {errors.email && (
              <span className="text-red-700">Email is required !</span>
            )}

            {/* password */}
            <CssTextField
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;<>,.?~\\/-]).{6,}$/,
              })}
              required
              fullWidth
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-700">password is required !</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-700">
                password must be more then 6 character!
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-700">
                password must have one uppercase, one lowercase, one number and
                one spacial characters!
              </span>
            )}

            {/* confirm-password */}
            <CssTextField
              {...register("confirmPassword", { required: true, minLength: 6 })}
              required
              fullWidth
              id="standard-password-input"
              label="Confirm Password"
              type="password"
              variant="standard"
            />
            {error && <span className="text-red-700">{error}</span>}

            <Stack mt={2} alignItems="center">
              {captchaValue ? (
                <Button type="submit"> Create Account</Button>
              ) : (
                <Button className="disabled" type="submit">
                  Create Account
                </Button>
              )}
            </Stack>
          </Stack>
        </form>
        <div className="space-y-2">
          <p className="text-center">Or</p>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className=" bg-gradient-to-r rounded-3xl  from-[#239FFE] to-[#0272E5] text-sm lg:text-base text-white p-3 flex gap-2 items-center"
            >
              Continue with<FcGoogle className="text-2xl"></FcGoogle>
            </button>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default Register;
