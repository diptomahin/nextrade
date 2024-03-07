import Container from "@/components/library/Container";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/library/Title";
import Subtitle from "@/components/library/Subtitle";

// add title in metadata
export const metadata = {
  title: "Contact Us - NexTrade",
  description: "Contact Us Nextrade",
};

const page = () => {
  return (
    <Container className="pt-24 pb-10 ">
      <Title> Get in touch</Title>
      <Subtitle>
        Feel free to reach out to us with any inquiries or feedback. Our
        dedicated team is here to assist you. <br/> Use the form below or send us an
        email with short description.
      </Subtitle>

      <div className="mx-auto  3xl:mx-24 bg-[#1d2334] rounded my-10">
        {/* contact form */}
        <ContactForm></ContactForm>
      </div>
      <div className="mt-5 3xl:mx-24 bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree hover:bg-gradient-to-tl text-darkGray rounded py-10">
        <div className="flex  flex-col md:flex-row justify-center gap-10 py-10">
          <div className=" 2xl:flex border border-darkThree p-10 items-center gap-7 shadow-md lg:p-5  rounded-lg ">
            <div className=" bg-blue-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <MailOutlinedIcon className=" text-primary" />
            </div>
            <div className=" flex-1 text-white  ">
              <p className="mt-2 font-semibold">Email:</p>
              <h1 className="  text-lg">nexttrade.help@gmail.com</h1>
            </div>
          </div>
          <div className=" 2xl:flex p-10 items-center text-white gap-7 shadow-md border border-darkThree lg:p-5  rounded-lg">
            <div className=" bg-blue-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <PhoneForwardedOutlinedIcon className=" text-primary" />
            </div>
            <div className=" flex-1 text-white ">
              <p className="mt-2 font-semibold">Phone:</p>
              <h1 className="font-bold text-lg">+880 1963-895488</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
