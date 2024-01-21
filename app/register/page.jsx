"use client"
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import Link from "next/link";
import { Stack, TextField, Typography } from "@mui/material";
import Button from "@/components/library/Button/Button";
import styled from "@emotion/styled";
import Container from "@/components/library/Container";


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

const Register = () => {
     const { register, handleSubmit, formState: { errors }, reset } = useForm()


     const onSubmit = async data => {
          console.log(data)

     }

     const handleGoogleLogin = () => {
     }

     return (
          <Container className="flex justify-center items-center min-h-[100vh]">
               <Stack gap={2} className="border-2 shadow-2xl shadow-primary rounded-2xl p-4 md:p-7 2xl:p-16 w-full md:w-3/5 lg:w-2/5">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                         <Typography variant="h2" mb={2} fontWeight="bold" className='text-primary' sx={{ fontSize: ["28px", "28px", "42px"] }}>Create Account</Typography>
                         <Typography className='text-lg lg:text-xl text-primary'>Have an account? <Link href="" className=' font-bold hover:underline' to='/login'>Login here</Link></Typography>
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
                              {errors.password?.type === "minLength" && <span className="text-red-700">password must be more then 6 character!</span>}
                              {errors.password?.type === "pattern" && <span className="text-red-700">password must have one uppercase, one lowercase, one number and one spacial characters!</span>}

                              {/* confirm-password */}
                              <CssTextField
                                   {...register("confirm-password", { required: true, minLength: 6 })}
                                   required
                                   fullWidth
                                   id="standard-password-input"
                                   label="Confirm Password"
                                   type="password"
                                   variant="standard"
                              />

                              {/* referral number */}
                              <CssTextField
                                   {...register("referral-code")}
                                   fullWidth
                                   id="standard-number-input"
                                   label="Referral code"
                                   type="number"
                                   variant="standard"
                              />
                              <Stack mt={2} alignItems="center">
                                   <Button type="submit">Crate Account</Button>
                              </Stack>
                         </Stack>
                    </form>
                    <div className='space-y-2'>
                         <p className='text-center'>Or</p>
                         <div className='flex justify-center'>
                              <button onClick={handleGoogleLogin} className=' bg-gradient-to-r rounded-3xl  from-[#239FFE] to-[#0272E5] font-semibold text-white p-3 flex gap-2 items-center'>Continue with<FcGoogle className='text-2xl'></FcGoogle></button>
                         </div>
                    </div>
               </Stack>
          </Container>
     );
};

export default Register;