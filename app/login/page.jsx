"use client";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Stack, TextField, Typography } from "@mui/material";
import Button from "@/components/library/buttons/root_button/RootButton";
import styled from "@emotion/styled";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import usePublicAPI from "@/hooks/usePublicAPI";
import Lottie from "lottie-react";
import loginAnim from "../../assets/loginAnim.json"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Magnetic from "@/components/library/Magnetic";
import SocialLogin from "@/components/auth_comp/SocialLogin";

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

const Login = () => {
  const publicAPI = usePublicAPI();

  const router = useRouter();
  const { from } = router.query || { from: "/dashboard" };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { logIn, googleLogin } = useAuth();
  const [captchaValue, setCaptchaValue] = useState(null);

  const onChange = (value) => {
    setCaptchaValue(value);
  };

  const onSubmit = async (data) => {
    logIn(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;

        Swal.fire({
          title: "Log In successful!",
          text: `Welcome back to NexTrade`,
          icon: "success",
        });
        router.push(from);
        reset;
      })
      .catch(() => {
        Swal.fire({
          title: "Log In failed!",
          text: `Please try again`,
          icon: "error",
        });
        reset;
      });
  };


  return (
    <div className="flex flex-col xl:flex-row-reverse xl:items-center min-h-[100vh] relative">
      <Magnetic>
        <Link href="/" className="text-white 2xl:text-primary font-semibold flex items-center gap-3 absolute top-5 2xl:top-10  left-7 2xl:right-12 z-10"><ArrowBackIcon />Home</Link>
      </Magnetic>
      
      <Stack flex={1} sx={{ backgroundColor: "#455ce9", height: "100vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
        <Lottie className="w-full" animationData={loginAnim} loop={true} />
      </Stack>

      <Stack
        flex={1} 
      >
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 mx-auto my-10 xl:my-0 md:px-0 w-full md:w-[80%] 2xl:w-[70%]">
          <Typography
            variant="h2"
            mb={2}
            fontWeight="600"
            sx={{ fontSize: ["24px", "28px", "30px"] }}
          >
            Login to NexTrade
          </Typography>

          <Stack mt={4} gap={3}>
            {/* email */}
            <CssTextField
              {...register("email", { required: true })}
              required
              fullWidth
              id="standard-required"
              label="Email"
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

            {/* Google Captcha */}

            <div className="mb-3 mt-4 flex justify-center">
              <ReCAPTCHA
                sitekey="6LelPTApAAAAADWVe8dSbkcjltECOr38kOEygA9u"
                onChange={onChange}
              />
            </div>

            <Stack mt={2} alignItems="center">
              <Button type="submit" className="w-full">Log In</Button>
            </Stack>
            <Typography className="text-lg lg:text-xl text-center ">
              Don&apos;t Have an account?{" "}
              <Link href="/register" className="text-primary font-bold hover:underline">
                Register here
              </Link>
            </Typography>
          </Stack>
          <SocialLogin />
        </form>

      </Stack>
    </div>
  );
};

export default Login;
