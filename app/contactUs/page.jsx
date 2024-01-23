"use client"

import Container from "@/components/library/Container";



const page = () => {
     return (
          <Container>

               <div name='contact' className='w-full h-auto md:h-screen flex justify-center items-center pt-16 md:pt-24'>
                    <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex p-4 flex-col max-w-[600px] w-full'>
                         <div className='pb-8'>
                              <p className='text-4xl font-bold inline border-b-4 border-rose-600 '>Contact</p>
                              <p className='py-4'>Submit the form below or shoot me an email - jasaiful@gmail.com</p>
                         </div>
                         <input className='bg-gray-200 rounded-lg p-2' type="text" placeholder='Name' name='name' />
                         <input className='my-4 p-2 bg-gray-200 rounded-lg' type="email" placeholder='Email' name='email' />
                         <textarea className='bg-gray-200 rounded-lg p-2' name="message" rows="10" placeholder='Message'></textarea>
                         <button className='border-2 rounded-xl hover:bg-rose-600 hover:border-rose-600 hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
                    </form>
               </div>

          </Container>
     );
};

export default page;