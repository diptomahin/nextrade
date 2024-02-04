"use client";

import Container from "@/components/library/Container";
import { Typography } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import ContactForm from "@/components/contact_comp/ContactForm";

const page = () => {
  return (
    <Container className="pt-24 pb-10 ">
      <Typography
        variant="h2"
        mt={5}
        mb={3}
        fontWeight="bold"
        className="text-primary"
        sx={{ textAlign: "center", fontSize: ["28px", "28px", "52px"] }}
      >
        Get in touch
      </Typography>
      <Typography
        className="text-gray-600 py-4"
        variant="h6"
        gutterBottom
        maxWidth={700}
        marginX="auto"
        sx={{ textAlign: "center", fontSize: ["16px", "14px", "16px"] }}
      >
        Feel free to reach out to us with any inquiries or feedback. Our
        dedicated team is here to assist you. Use the form below or send us an
        email with short description.
      </Typography>

      <div className="mx-auto 2xl:mx-24 bg-[#e9eef1] rounded-xl">
        {/* contact form */}
        <ContactForm></ContactForm>
      </div>
      <div className="mx-auto mt-10 2xl:mx-24 bg-[#e9eef1] rounded-xl">
        <div className="flex flex-col md:flex-row justify-around gap-10 py-10">
          <div className=" xl:flex p-10 items-center gap-7 shadow-md lg:p-5  rounded-lg bg-white">
            <div className=" bg-blue-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <MailOutlinedIcon className=" text-primary" />
            </div>
            <div className=" flex-1  ">
              <p className="mt-2">Email:</p>
              <h1 className=" font-bold text-lg">nexttrade.help@gmail.com</h1>
            </div>
          </div>
          <div className=" xl:flex p-10 items-center gap-7 shadow-md lg:p-5  rounded-lg bg-white">
            <div className=" bg-blue-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <PhoneForwardedOutlinedIcon className=" text-primary" />
            </div>
            <div className=" flex-1  ">
              <p className="mt-2">Phone:</p>
              <h1 className=" font-bold text-lg">+880 1963-895488</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
