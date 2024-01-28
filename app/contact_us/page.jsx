"use client";

import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import { Typography } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";

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
        <form
          method="POST"
          action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
          className="flex p-5 md:p-10 space-y-5 flex-col  w-full"
        >
          <div className="md:flex justify-between gap-10">
            <div className="md:w-1/2 md:space-y-5">
              <div className="flex flex-col">
                <label
                  for="name"
                  className="font-semibold text-primary text-xl"
                >
                  Name:
                </label>
                <input
                  className="bg-white rounded-lg p-2"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                />
              </div>

              <div className="flex flex-col">
                <label
                  for="name"
                  className="font-semibold text-primary text-xl"
                >
                  Phone:
                </label>
                <input
                  className="bg-white rounded-lg p-2"
                  type="number"
                  placeholder="01 xx xxxx xxx"
                  name="name"
                  id="name"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:space-y-5">
              <div className="flex flex-col">
                <label
                  for="email"
                  className="font-semibold text-primary text-xl"
                >
                  Email:
                </label>
                <input
                  className="p-2 bg-white rounded-lg"
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  id="email"
                />
              </div>

              <div className="flex flex-col">
                <label
                  for="name"
                  className="font-semibold text-primary text-xl"
                >
                  Company:
                </label>
                <input
                  className="bg-white rounded-lg p-2"
                  type="text"
                  placeholder="Microsoft"
                  name="name"
                  id="name"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label for="message" className="font-semibold text-primary text-xl">
              Leave us a message:
            </label>
            <textarea
              className="bg-white w-full rounded-lg p-2"
              name="message"
              rows="5"
              placeholder="Your Message"
              id="message"
            ></textarea>
          </div>

          <div>
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-10 2xl:mx-24 bg-[#e9eef1] rounded-xl">
        <div className="flex flex-col md:flex-row justify-around gap-10 py-10">
          <div className=" xl:flex p-10 items-center gap-7 shadow-md lg:p-5  rounded-lg bg-white">
            <div className=" bg-blue-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <MailOutlinedIcon className=" text-primary" />
            </div>
            <div className=" flex-1  ">
              <p className="mt-2">Email:</p>
              <h1 className=" font-bold text-lg">help@nexttrade.com</h1>
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
