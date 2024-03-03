"use client";
import SocialLogin from "@/components/auth/SocialLogin";
import DarkButton from "@/components/library/Button";
import useAuth from "@/hooks/useAuth";
import styled from "@emotion/styled";
import { Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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

const LoginForm = () => {
  const router = useRouter();
  const { from } = router.query || { from: "/" };

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
        Swal.fire({
          title: "Log In successful!",
          text: `Welcome back to NexTrade`,
          icon: "success",
        });
        router.push(from);
        reset();
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-5 my-16 2xl:mx-0 p-5 md:px-10 w-full md:w-[400px] 2xl:w-[400px] border rounded bg-white"
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
            <DarkButton type="submit" className="w-full lg:h-12">
              Log In
            </DarkButton>
          ) : (
            <DarkButton disabled type="submit" className="w-full lg:h-12">
              Log In
            </DarkButton>
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
  );
};

export default LoginForm;
