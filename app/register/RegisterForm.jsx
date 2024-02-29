"use client";
import SocialLogin from "@/components/auth/SocialLogin";
import DarkButton from "@/components/library/buttons/DarkButton";
import getDate from "@/components/utils/date";
import useAuth from "@/hooks/useAuth";
import usePublicAPI from "@/hooks/usePublicAPI";
import styled from "@emotion/styled";
import { Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

  const { createUser, updateUserProfile } = useAuth();
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
      className="mx-5 my-16 2xl:mx-0 p-5 md:px-10 w-full md:w-[400px] 2xl:w-[400px] border rounded bg-white"
    >
      <Typography
        variant="h2"
        mb={1}
        fontWeight="bold"
        className="text-primary text-center"
        sx={{ fontSize: "24px" }}
      >
        Create an account
      </Typography>

      <Stack gap={2}>
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
            password must have one uppercase, one lowercase, one number and one
            spacial characters!
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

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LelPTApAAAAADWVe8dSbkcjltECOr38kOEygA9u"
            onChange={onChange}
          />
        </div>

        <Stack alignItems="center">
          {captchaValue ? (
            <DarkButton className="w-full lg:h-12" type="submit">
              {" "}
              Create Account
            </DarkButton>
          ) : (
            <DarkButton disabled className="w-full lg:h-12" type="submit">
              Create Account
            </DarkButton>
          )}
        </Stack>
        <Typography className="text-lg text-center">
          Already have an account?
          <Link
            href="/login"
            className="ml-1 font-medium text-primary hover:underline"
          >
            Login here
          </Link>
        </Typography>
      </Stack>
      <SocialLogin />
    </form>
  );
};

export default RegisterForm;
