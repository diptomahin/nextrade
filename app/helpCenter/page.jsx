"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
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
                         {/* card 1  */}
                         <Card className="p-5 bg-white rounded-2xl border border-slate-200">
                              <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                                   <NotStartedOutlinedIcon className="text-xl text-primary " />
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
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci.
                                   </Typography>
                                   <div className='pt-5'>
                                        <Button>Browse questions</Button>
                                   </div>
                              </CardContent>
                         </Card>
                         {/* card 2  */}
                         <Card className="p-5 bg-white rounded-2xl border border-slate-200">
                              <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                                   <VerifiedUserOutlinedIcon className="text-xl text-primary " />
                              </div>
                              <CardContent>
                                   <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="font-semibold"
                                   >
                                        Authentication
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary" className="text-gray-500">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci.
                                   </Typography>
                                   <div className='pt-5'>
                                        <Button>Browse questions</Button>
                                   </div>
                              </CardContent>
                         </Card>
                         {/* cart 3  */}
                         <Card className="p-5 bg-white rounded-2xl border border-slate-200">
                              <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                                   <PriceChangeOutlinedIcon className="text-xl text-primary " />
                              </div>
                              <CardContent>
                                   <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="font-semibold"
                                   >
                                        Limits & pricing
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary" className="text-gray-500">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci.
                                   </Typography>
                                   <div className='pt-5'>
                                        <Button>Browse questions</Button>
                                   </div>
                              </CardContent>
                         </Card>
                         {/* cart 4  */}
                         <Card className="p-5 bg-white rounded-2xl border border-slate-200">
                              <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                                   <ConstructionOutlinedIcon className="text-xl text-primary " />
                              </div>
                              <CardContent>
                                   <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="font-semibold"
                                   >
                                        Advanced settings
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary" className="text-gray-500">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci.
                                   </Typography>
                                   <div className='pt-5'>
                                        <Button>Browse questions</Button>
                                   </div>
                              </CardContent>
                         </Card>
                         {/* cart 5  */}
                         <Card className="p-5 bg-white rounded-2xl border border-slate-200">
                              <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                                   <WebhookOutlinedIcon className="text-xl text-primary " />
                              </div>
                              <CardContent>
                                   <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="font-semibold"
                                   >
                                        API endpoints
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary" className="text-gray-500">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci.
                                   </Typography>
                                   <div className='pt-5'>
                                        <Button>Browse questions</Button>
                                   </div>
                              </CardContent>
                         </Card>
                         {/* cart 6  */}
                         <Card className="p-5 bg-white rounded-2xl border border-slate-200">
                              <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                                   <ApiOutlinedIcon className="text-xl text-primary " />
                              </div>
                              <CardContent>
                                   <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="font-semibold"
                                   >
                                        Enterprise features
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary" className="text-gray-500">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci.
                                   </Typography>
                                   <div className='pt-5'>
                                        <Button>Browse questions</Button>
                                   </div>
                              </CardContent>
                         </Card>
                    </div>
               </div>
               <div>
                    <h2>Popular questions?</h2>
                    <div>

                    </div>
               </div>
          </Container>
     );
};

export default page;