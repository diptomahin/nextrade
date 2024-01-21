"use client"
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import Link from "next/link";
import { Stack, TextField, Typography } from "@mui/material";
import Button from "@/components/library/Button/Button";
import styled from "@emotion/styled";
import Container from "@/components/library/Container";
import Swal from "sweetalert2";
import useAuth from "@/utils/useAuth";


// customized TextField
const CssTextField = styled(TextField)({
     '& label.Mui-focused': {
          color: '#21366c',
     },
     '& .MuiInput-underline:after': {
          borderBottomColor: '#21366c',
     },
     '& .MuiOutlinedInput-root': {
          '& fieldset': {
               borderColor: '#E0E3E7',
          },
          '&:hover fieldset': {
               borderColor: '#B2BAC2',
          },
          '&.Mui-focused fieldset': {
               borderColor: '#6F7E8C',
          },
     },
});

const Login = () => {
     const { register, handleSubmit, formState: { errors }, reset } = useForm()
     const { googleLogin } = useAuth();


     const onSubmit = async data => {
          console.log(data)

     }

     const handleGoogleLogin = () => {
          googleLogin()
               .then(res => {
                    const loggedUser = res.user;
                    console.log(loggedUser);

                    // const userInfo = {
                    //      userID: loggedUser.uid,
                    //      email: loggedUser.email,
                    //      name: loggedUser.displayName,
                    //      createdAt: loggedUser.metadata.creationTime
                    // }
                    // console.log(userInfo)

                    Swal.fire({
                         title: "Log In successful!",
                         text: `Welcome back ${loggedUser.displayName}`,
                         icon: "success"
                     });
                     reset

               })
               .catch(error => {
                    console.log(error.message)
                    Swal.fire({
                         title: "Log In failed!",
                         text: `Please try again`,
                         icon: "error"
                     });
                     reset
               })
     }

     return (
          <Container className="flex justify-center items-center min-h-[100vh]">
               <Stack gap={2} className="border-2 shadow-2xl shadow-primary rounded-2xl p-4 md:p-7 2xl:p-16 w-full md:w-3/5 lg:w-2/5">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                         <Typography variant="h2" mb={2} fontWeight="bold" className='text-primary' sx={{ fontSize: ["28px", "28px", "42px"] }}>Welcome to Login</Typography>
                         <Typography className='text-lg lg:text-xl text-primary'>Don&apos;t Have an account? <Link href="/register" className=' font-bold hover:underline'>Register here</Link></Typography>
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
                              {errors.email && <span className="text-red-700">Email is required !</span>}

                              {/* password */}
                              <CssTextField
                                   {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;<>,.?~\\/-]).{6,}$/ })}
                                   required
                                   fullWidth
                                   id="standard-password-input"
                                   label="Password"
                                   type="password"
                                   variant="standard"
                              />
                              {errors.password?.type === "required" && <span className="text-red-700">password is required !</span>}

                              <Stack mt={2} alignItems="center">
                                   <Button type="submit">Log In</Button>
                              </Stack>
                         </Stack>
                    </form>
                    <div className='space-y-2'>
                         <p className='text-center'>Or</p>
                         <div className='flex justify-center'>
                              <button onClick={handleGoogleLogin} className=' bg-gradient-to-r rounded-3xl  from-[#239FFE] to-[#0272E5] text-sm lg:text-base text-white p-3 flex gap-2 items-center'>Continue with<FcGoogle className='text-2xl'></FcGoogle></button>
                         </div>
                    </div>
               </Stack>
          </Container>
     );
};

export default Login;