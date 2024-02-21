import Typography from "@mui/material/Typography";
import Container from "@/components/library/Container";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Title from "@/components/library/Title";
import Subtitle from "@/components/library/Subtitle";
import HelpCenterCard from "./HelpCenterCard";
import NewsLatter from "./NewsLatter";

const page = () => {
  return (
    <Container className="py-20 overflow-hidden">
      <Title>Welcome to our Help Center</Title>
      <Subtitle>
        Welcome to our help center! Need assistance? We&apos;re here for you.
        Explore our resources or contact our support team. Your satisfaction is
        our priority!
      </Subtitle>

      <HelpCenterCard />
      <div className="mx-auto 2xl:mx-24">
        <Title>Popular questions?</Title>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10 text-darkGray">
            {/* card 1  */}
            <Accordion className="rounded">
              <AccordionSummary className="rounded">
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  How to contact support?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="rounded">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-gray-500 text-left"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium tempore ex commodi eligendi expedita soluta rerum
                  doloribus minus adipisci.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* card 2  */}
            <Accordion className="rounded">
              <AccordionSummary>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold"
                >
                  Support center operating hours?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-gray-500 text-left"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium tempore ex commodi eligendi expedita soluta rerum
                  doloribus minus adipisci.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* card 3  */}
            <Accordion className="rounded">
              <AccordionSummary>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold"
                >
                  How to submit a support ticket?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-gray-500 text-left"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium tempore ex commodi eligendi expedita soluta rerum
                  doloribus minus adipisci.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* card 4  */}
            <Accordion className="rounded">
              <AccordionSummary>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold"
                >
                  Types of issues supported?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-gray-500 text-left"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium tempore ex commodi eligendi expedita soluta rerum
                  doloribus minus adipisci.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="mx-auto 2xl:mx-24 pt-10">
        <NewsLatter />
      </div>
    </Container>
  );
};

export default page;
