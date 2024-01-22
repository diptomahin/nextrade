"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@/components/library/Button/Button";
import Image from "next/image";
import Container from '@/components/library/Container';

const page = () => {

     return (
          <Container className='py-24'>
               <p></p>
               <Typography variant="h2" mt={5} mb={3} fontWeight="bold" className='text-primary' sx={{ textAlign: "center", fontSize: ["28px", "28px", "52px"] }}>Welcome to our <br /> Help Center</Typography>
               <Typography variant="h6" gutterBottom maxWidth={700} marginX="auto" sx={{ textAlign: "center", fontSize: ["16px", "20px", "24px"] }}>Welcome to our help center! Need assistance? <br /> We&apos;re here for you. Explore our resources or contact our support team. Your satisfaction is our priority!</Typography>
               <div>
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-6 xl:gap-10 gap-4 text-center mx-auto justify-center item-center mt-10">
                         {/* cart 1  */}
                         <Card className="p-5 bg-white rounded-2xl border border-slate-200">
                              <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                                   <NotStartedOutlinedIcon className=" text-2xl text-primary " />
                              </div>
                              <CardContent>
                                   <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="font-semibold"
                                   >
                                        Getting started
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary" className="text-gray-500">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci. Doloribus velit quidem eius labore rerum repellendus deserunt porro optio totam?
                                   </Typography>
                                   <div className='pt-5'>
                                        <Button>Browse questions</Button>
                                   </div>
                              </CardContent>
                         </Card>
                    </div>
               </div>
               <div>
                    <h2>Popular questions</h2>
                    <div>

                    </div>
               </div>
          </Container>
     );
};

export default page;