"use client"

import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
import { Typography } from "@mui/material";



const page = () => {
     return (
          <Container className='pt-24 pb-10 bg-slate-200'>
               <Typography variant="h2" mt={5} mb={3} fontWeight="bold" className='text-primary' sx={{ textAlign: "center", fontSize: ["28px", "28px", "52px"] }}>Get in touch</Typography>
               <Typography variant="h6" gutterBottom maxWidth={700} marginX="auto" sx={{ textAlign: "center", fontSize: ["16px", "20px", "24px"] }}>Feel free to reach out to us with any inquiries or feedback. Our dedicated team is here to assist you. Use the form below or send us an email with short description.</Typography>

               <div className='mx-auto 2xl:mx-24 bg-white rounded-xl'>
                    <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex p-10 space-y-5 flex-col  w-full'>

                         <div className="md:flex justify-between gap-10">
                              <div className="md:w-1/2 md:space-y-5">
                                   <div className="flex flex-col">
                                        <label for='name' className="font-semibold text-primary text-xl">Name:</label>
                                        <input className='bg-gray-200 rounded-lg p-2' type="text" placeholder='Julfiker Ali' name='name' id='name' />
                                   </div>

                                   <div className="flex flex-col">
                                        <label for='name' className="font-semibold text-primary text-xl">Phone:</label>
                                        <input className='bg-gray-200 rounded-lg p-2' type="number" placeholder='+880 01620585826' name='name' id='name' />
                                   </div>
                              </div>

                              <div className="md:w-1/2 md:space-y-5">
                                   <div className="flex flex-col">
                                        <label for='email' className="font-semibold text-primary text-xl">Email:</label>
                                        <input className='p-2 bg-gray-200 rounded-lg' type="email" placeholder='jasaiful@gmail.com' name='email' id='email' />
                                   </div>

                                   <div className="flex flex-col">
                                        <label for='name' className="font-semibold text-primary text-xl">Company:</label>
                                        <input className='bg-gray-200 rounded-lg p-2' type="text" placeholder='Microsoft' name='name' id='name' />
                                   </div>
                              </div>
                         </div>

                         <div className="flex flex-col">
                              <label for='message' className="font-semibold text-primary text-xl">Leave us a message:</label>
                              <textarea className='bg-gray-200 w-full rounded-lg p-2' name="message" rows="10" placeholder='Your Message' id='message'></textarea>
                         </div>

                         <Button>Send Message</Button>
                    </form>

               </div>

          </Container>
     );
};

export default page;