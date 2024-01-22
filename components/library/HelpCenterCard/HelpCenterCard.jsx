import Container from "@/components/library/Container.jsx";
import Button from "../../library/Button/Button.jsx";
import TextField from "@mui/material/TextField";

const HelpCenterCard = () => {
    const inputStyle = {
        color: "white",
        borderColor: "white",
      };
    
      const labelStyle = {
        color: "white",
      };
    
      return (
        <Container className=" text-white bg-primary md:flex justify-between rounded-xl px-10 py-10">
          <div className="mb-10 md:mb-0">
            <h1 className="lg:text-3xl md:text-3xl text-4xl font-bold pb-4">Need more help? <br /> Get in touch with us today! </h1>
            
          </div>
          <div className=" flex items-center gap-8">
            
            <Button>Submit ticket</Button>
            <Button>Read documentation</Button>
          </div>
        </Container>
      );
};

export default HelpCenterCard;