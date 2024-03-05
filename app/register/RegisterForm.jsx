"use client";
import SocialLogin from "@/components/auth/SocialLogin";
import Button from "@/components/library/Button";
import getDate from "@/components/utils/date";
import useAuth from "@/hooks/useAuth";
import usePublicAPI from "@/hooks/usePublicAPI";
import styled from "@emotion/styled";
import { Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const RegisterForm = () => {
  const publicAPI = usePublicAPI();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const date = getDate();

  const { createUser, updateUserName } = useAuth();
  const [error, setError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const onChange = (value) => {
    setCaptchaValue(value);
  };

  // submit register form
  const onSubmit = async (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        updateUserName(data.name);

        const userInfo = {
          userID: loggedUser.uid,
          email: loggedUser.email,
          name: data.name,
          createdAt: date,
          balance: 0,
          deposit: 0,
          withdraw: 0,
          role: "trader",
          photo: "",
          phone: "",
          address: "",
          username: loggedUser.email,
          currency: "",
          password: "passfield",
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-5 my-16 2xl:mx-0 p-5 2xl:p-4 2xl:px-10 3xl:p-5 3xl:px-10 md:px-10 w-full md:w-[500px] xl:w-[400px] 3xl:w-[500px] border rounded-xl bg-white/60 backdrop-blur-xl"
    >
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-36 3xl:mt-5 mb-6 z-10" />
      </Link>
      <h3 className="text-xl font-semibold text-black">
        Create an account
      </h3>
      <p className="text-zinc-500 text-sm mb-6">
        Sign up for free to access to any of our about the product feature updates, event and marketing promotions
      </p>

      <Stack gap={2}>
        {/* user name */}
        <CssTextField
          {...register("name", { required: true })}
          required
          fullWidth
          size="small"
          id="standard-number-input"
          label="Name"
          type="text"
        />
        {errors.name && (
          <span className="text-red-700">Name is required !</span>
        )}

        {/* email */}
        <CssTextField
          {...register("email", { required: true })}
          required
          fullWidth
          size="small"
          id="standard-required"
          label="Email"
          type="email"
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
          size="small"
          id="standard-password-input"
          label="Password"
          type="password"
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
            password must have one uppercase, one lowercase, one number and one
            spacial characters!
          </span>
        )}
        {error && <span className="text-red-700">{error}</span>}

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
              {" "}
              Create Account
            </Button>
          ) : (
            <Button disabled type="submit" className="w-full lg:h-11 rounded-full">
              Create Account
            </Button>
          )}
        </Stack>
        <SocialLogin />
        <Typography className="text-black">
          Already have an account?
          <Link
            href="/login"
            className="ml-1 font-medium text-primary hover:underline"
          >
            Login here
          </Link>
        </Typography>
      </Stack>
      
    </form>
  );
};

export default RegisterForm;
