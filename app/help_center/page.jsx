import Typography from "@mui/material/Typography";
import Container from "@/components/library/Container";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Title from "@/components/library/Title";
import Subtitle from "@/components/library/Subtitle";
import HelpCenterCard from "./HelpCenterCard";
import NewsLatter from "./NewsLatter";

// add title in metadata
export const metadata = {
  title: "Help Center - NexTrade",
  description: "Help Center page from Nextrade",
};

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

      <div className="mx-auto  3xl:mx-24">
        <Title>Popular questions?</Title>
        <div>
          <div className=" mt-10 text-darkGray">
            {/* card 1  */}
            <Accordion
              sx={{
                backgroundColor: "#1d2334",
                color: "white",
                border: "1px solid #2c3750"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  How to contact support?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                You can contact our support team via email at
                nexttrade.help@gmail.com or by filling out the contact form on
                our website. Additionally, you can reach us by phone at +880
                1963-895488. We&apos;re here to assist you!
              </AccordionDetails>
            </Accordion>

            {/* card 2  */}

            <Accordion
              sx={{
                backgroundColor: "#1d2334",
                color: "white",
                border: "1px solid #2c3750"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  Support center operating hours?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Our support center operates from 9:AM on 5 days of the week.
                Rest assured, we strive to respond to all inquiries promptly
                during our operating hours.
              </AccordionDetails>
            </Accordion>

            {/* card 3  */}

            <Accordion
              sx={{
                backgroundColor: "#1d2334",
                color: "white",
                border: "1px solid #2c3750"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  How to submit a support ticket?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                To submit a support ticket, simply navigate to our
                website&apos;s support page and fill out the provided form with
                details regarding your issue. Alternatively, you can email us
                directly at nexttrade.help@gmail.com or call our support hotline
                at +880 1963-895488. Be sure to include as much information as
                possible to expedite the resolution process.
              </AccordionDetails>
            </Accordion>

            {/* card 4  */}

            <Accordion
              sx={{
                backgroundColor: "#1d2334",
                color: "white",
                border: "1px solid #2c3750"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  Types of issues supported?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                We offer comprehensive support for various issues including
                technical difficulties, account inquiries, billing concerns, and
                general assistance with our platform. Whether you&apos;re
                experiencing a bug or need guidance on using our services, our
                dedicated support team is here to help. If you&apos;re unsure
                whether your issue falls within our scope of support, don&apos;t
                hesitate to reach out, and we&apos;ll be happy to assist you.
              </AccordionDetails>
            </Accordion>

            {/* card 5  */}

            <Accordion
              sx={{
                backgroundColor: "#1d2334",
                color: "white",
                border: "1px solid #2c3750"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  What is refund policy?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Curious about our refund policy? Learn about our guidelines
                regarding refunds, including eligibility criteria and the
                process for requesting refunds. We aim to ensure transparency
                and fairness in our refund procedures.
              </AccordionDetails>
            </Accordion>

            {/* card 6  */}

            <Accordion
              sx={{
                backgroundColor: "#1d2334",
                color: "white",
                border: "1px solid #2c3750"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  Data Security & Privacy?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Concerned about the security of your data? Discover how we
                prioritize data security and protect your privacy. Explore our
                measures for data encryption, compliance with regulations, and
                our commitment to safeguarding your information.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="mx-auto  3xl:mx-24 pt-10">
        <NewsLatter />
      </div>

    </Container>
  );
};

export default page;
