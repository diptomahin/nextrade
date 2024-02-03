"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Stack, TextField, Typography } from "@mui/material";
import Button from "@/components/library/buttons/root_button/RootButton";
import styled from "@emotion/styled";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SocialLogin from "@/components/auth_comp/SocialLogin";
import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import loginAnim from "../../assets/loginAnim.json";

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
  const router = useRouter();
  const { from } = router.query || { from: "/dashboard" };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { logIn } = useAuth();
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
    <div className="relative min-h-[100vh] w-full flex flex-col xl:flex-row-reverse bg-gradient-to-br from-primary to-[#352786]">
      <Link
        href="/"
        className="text-white font-semibold fixed top-8 2xl:top-10 right-8 2xl:right-10 z-10 "
      >
        <ArrowBackIcon />
        Home
      </Link>
      <Link href="/" className="fixed top-8 2xl:top-10 left-8 2xl:left-10 z-10">
        <Image src={logo} alt="Logo" className="w-36 lg:w-40 z-10" />
      </Link>
      <div className="flex-1 h-full xl:min-h-[100vh] flex items-center justify-center py-12">
        <Lottie
          className="w-5/6 md:w-7/12 xl:w-3/5"
          loop={true}
          animationData={loginAnim}
        />
      </div>
      <div className="flex-1 min-h-[100vh] flex items-center justify-center xl:bg-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-5 my-16 xl:mx-0 p-5 md:px-10 w-full md:w-[400px] xl:w-[400px] border rounded-xl bg-white"
        >
          <Typography
            variant="h2"
            mb={1}
            fontWeight="bold"
            className="text-primary text-center"
            sx={{ fontSize: "24px" }}
          >
            Login to NexTrade
          </Typography>

          <Stack gap={2}>
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

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LelPTApAAAAADWVe8dSbkcjltECOr38kOEygA9u"
                onChange={onChange}
              />
            </div>

            <Stack alignItems="center">
              {captchaValue ? (
                <Button type="submit" className="w-full lg:h-12">
                  Log In
                </Button>
              ) : (
                <Button disabled type="submit" className="w-full lg:h-12">
                  Log In
                </Button>
              )}
            </Stack>
            <Typography className="text-lg text-center">
              Don&apos;t Have an account?{" "}
              <Link
                href="/register"
                className="ml-1 font-medium text-primary hover:underline"
              >
                Register here
              </Link>
            </Typography>
          </Stack>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
