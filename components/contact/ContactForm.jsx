"use client";
import usePublicAPI from "@/hooks/usePublicAPI";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../library/Button";

const ContactForm = () => {
  const [submitMessage, setSubmitMessage] = useState(null);
  const publicAPI = usePublicAPI();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await publicAPI.post(`/contact`, data); //Sent data to the database
      await emailjs.send(
        "service_5crf3z7",
        "template_6p6drrs",
        data,
        "eKB9bGUsvbE937RGN"
      );
      setSubmitMessage({ type: "success", text: "Email sent successfully" });
      console.log("Email sent successfully");
      reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to send email. Please try again later.",
      });
      console.error("Failed to send email:", error);
    }
  };

  const validationOptions = {
    name: { required: "Name is required" },
    phone: { required: "Phone number is required" },
    email: { required: "Email is required" },
    message: { required: "Message is required" },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
      className="flex p-5 md:p-10 space-y-5 flex-col  w-full"
    >
      <div className="md:flex justify-between gap-10">
        <div className="md:w-1/2 md:space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-semibold text-primary text-xl"
            >
              Name:
            </label>
            <input
              {...register("name", validationOptions.name)}
              className="bg-white rounded-lg p-2"
              type="text"
              placeholder="Name"
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="font-semibold text-primary text-xl"
            >
              Phone:
            </label>
            <input
              {...register("phone", validationOptions.phone)}
              className="bg-white rounded-lg p-2"
              type="number"
              placeholder="01 xx xxxx xxx"
              id="phone"
            />
          </div>
        </div>

        <div className="md:w-1/2 md:space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-semibold text-primary text-xl"
            >
              Email:
            </label>
            <input
              {...register("email", validationOptions.email)}
              className="p-2 bg-white rounded-lg"
              type="email"
              placeholder="example@gmail.com"
              id="email"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="company"
              className="font-semibold text-primary text-xl"
            >
              Company:
            </label>
            <input
              {...register("company")}
              className="bg-white rounded-lg p-2"
              type="text"
              placeholder="Microsoft"
              id="company"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="font-semibold text-primary text-xl">
          Leave us a message:
        </label>
        <textarea
          {...register("message", validationOptions.message)}
          className="bg-white w-full rounded-lg p-2"
          rows="5"
          placeholder="Your Message"
          id="message"
        ></textarea>
      </div>
      {/* Success or error message */}

      {submitMessage && (
        <div
          className={`${
            submitMessage.type === "success" ? "text-green-500" : "text-red-500"
          } text-center font-semibold mt-4`}
        >
          {submitMessage.text}
        </div>
      )}

      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
