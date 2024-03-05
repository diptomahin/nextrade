"use client";
import SocialLogin from "@/components/auth/SocialLogin";
import Button from "@/components/library/Button";
import useAuth from "@/hooks/useAuth";
import styled from "@emotion/styled";
import { Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";

// customized TextField
const CssTextField = styled(TextField)({
  "& label": {
    paddingLeft: "10px",
    fontSize: "14px",
  },
  "& label.Mui-focused": {
    color: "#21366c",
    paddingLeft: "0"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#21366c",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "35px",
      borderColor: "#a1a1aa",
    },
    "&:hover fieldset": {
      borderColor: "#40a0ff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#40a0ff",
    },
    "& input": {
      padding: "10px 20px"
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
      className="mx-5 my-16 2xl:mx-0 p-5 2xl:p-4 2xl:px-10 3xl:p-5 3xl:px-10 md:px-10 w-full md:w-[500px] xl:w-[400px] 3xl:w-[500px] border rounded-xl bg-white/60  backdrop-blur-xl"
    >
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-36 mx-auto 3xl:mt-5 mb-5 z-10" />
      </Link>
      <h3 className="text-xl font-semibold mb-6 text-black text-center">
        WelCome Back
      </h3>
      <p className="text-zinc-500 text-center text-sm mb-5">
        Login for free to access to any of our about the product feature updates, event and marketing promotions
      </p>

      <Stack gap={2}>
        {/* email */}
        <CssTextField
          {...register("email", { required: true })}
          required
          size="small"
          fullWidth
          id="standard-required"
          label="Email address"
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
          size="small"
          fullWidth
          id="standard-password-input"
          label="Password"
          type="password"
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
            <Button type="submit" className="w-full lg:h-11 rounded-full">
              Log In
            </Button>
          ) : (
            <Button disabled type="submit" className="w-full lg:h-11 rounded-full">
              Log In
            </Button>
          )}
        </Stack>
        <SocialLogin />

        <Typography className=" text-black text-center">
          Don&apos;t Have an account?{" "}
          <Link
            href="/register"
            className="ml-1 font-medium text-primary hover:underline"
          >
            Create an account
          </Link>
        </Typography>
      </Stack>


    </form>
  );
};

export default LoginForm;
