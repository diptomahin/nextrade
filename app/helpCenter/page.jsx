"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@/components/library/Button/Button";
import Image from "next/image";

const page = () => {

     return (
          <div className='py-24'>
               <p></p>
               <Typography variant="h2" mt={5} mb={3} fontWeight="bold" className='text-primary' sx={{ textAlign: "center", fontSize: ["28px", "28px", "52px"] }}>Welcome to our <br /> Help Center</Typography>
               <Typography variant="h6" gutterBottom maxWidth={700} marginX="auto" sx={{ textAlign: "center", fontSize: ["16px", "20px", "24px"] }}>Welcome to our help center! Need assistance? <br /> We're here for you. Explore our resources or contact our support team. Your satisfaction is our priority!</Typography>
               <div>
                    <div>
                         {/* cart 1  */}
                         <Card className="py-14 px-2 rounded-lg border border-gray-100">
                              <div className="w-24 h-fit text-center mx-auto bg-[#22356b] rounded-full">
                                   {/* <Image
                                        src={Icon1}
                                        alt="Trad Icon"
                                        width={400}
                                        height={500}
                                        placeholder="blur"
                                   /> */}
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
                                   <Typography variant="body2" color="text.secondary" className="font-semibold text-gray-400">
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ex commodi eligendi expedita soluta rerum doloribus minus adipisci. Doloribus velit quidem eius labore rerum repellendus deserunt porro optio totam?
                                   </Typography>
                                   <Button>Browse questions</Button>
                              </CardContent>
                         </Card>
                    </div>
               </div>
               <div>
                    <h2>Popular questions</h2>
                    <div>

                    </div>
               </div>
          </div>
     );
};

export default page;