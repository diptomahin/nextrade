"use client";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RegisterAnim from "../../assets/regiAnim";
import Magnetic from "@/components/library/Magnetic";
import SocialLogin from "@/components/root_comp/auth_comp/SocialLogin";

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
          balance: 0,
          portfolio: [],
        };

        publicAPI.post("/all-users", userInfo).then((res) => {
          Swal.fire({
            title: "Account created successfully!",
            text: `Welcome to NexTrade`,
            icon: "success",
          });
          router.push("/");
          reset();
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

  return (
    <div className="flex flex-col xl:flex-row xl:items-center min-h-[100vh] relative">
      <Magnetic>
        <Link
          href="/"
          className="text-white font-semibold flex items-center gap-3 absolute top-5 2xl:top-10 left-7 2xl:left-12 z-10"
        >
          <ArrowBackIcon />
          Home
        </Link>
      </Magnetic>
      <Stack
        flex={1}
        sx={{
          backgroundColor: "#455ce9",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie className=" w-3/4" animationData={RegisterAnim} loop={true} />
      </Stack>
      <Stack flex={1}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-5 mx-auto my-10 xl:my-0 md:px-0 w-full md:w-[80%] 2xl:w-[70%]"
        >
          <Typography
            variant="h2"
            mb={2}
            fontWeight="bold"
            className="text-primary"
            sx={{ fontSize: ["24px", "28px", "30px"] }}
          >
            Create Account
          </Typography>

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

            {/* Google Captcha */}

            <div className="mb-3 mt-4 flex justify-center">
              <ReCAPTCHA
                sitekey="6LelPTApAAAAADWVe8dSbkcjltECOr38kOEygA9u"
                onChange={onChange}
              />
            </div>

            <Stack mt={2} alignItems="center">
              {captchaValue ? (
                <Button className="w-full" type="submit">
                  {" "}
                  Create Account
                </Button>
              ) : (
                <Button disabled className="w-full" type="submit">
                  Create Account
                </Button>
              )}
            </Stack>
            <Typography className="text-lg lg:text-xl text-center">
              Have an account?{" "}
              <Link
                href="/login"
                className=" font-bold text-primary hover:underline"
              >
                Login here
              </Link>
            </Typography>
          </Stack>
          <SocialLogin />
        </form>
      </Stack>
    </div>
  );
};

export default Register;
