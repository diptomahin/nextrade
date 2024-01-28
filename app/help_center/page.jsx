"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import Typography from "@mui/material/Typography";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import HelpCenterCard from "@/components/library/HelpCenterCard";

const page = () => {
  return (
    <Container className="pt-24 pb-10 bg-slate-200">
      <Typography
        variant="h2"
        mt={5}
        mb={3}
        fontWeight="bold"
        className="text-primary"
        sx={{ textAlign: "center", fontSize: ["28px", "28px", "52px"] }}
      >
        Welcome to our <br /> Help Center
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        maxWidth={700}
        marginX="auto"
        sx={{ textAlign: "center", fontSize: ["16px", "20px", "24px"] }}
      >
        Welcome to our help center! Need assistance? <br /> We&apos;re here for
        you. Explore our resources or contact our support team. Your
        satisfaction is our priority!
      </Typography>
      <div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-6 xl:gap-10 gap-4 text-center mx-auto 2xl:mx-24 justify-center item-center mt-10">
          {/* card 1  */}
          <Card className="p-5 bg-white rounded-2xl border border-slate-200">
            <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <NotStartedOutlinedIcon className="text-xl text-primary " />
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
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-gray-500"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium tempore ex commodi eligendi expedita soluta rerum
                doloribus minus adipisci.
              </Typography>
              <div className="pt-5">
                <Button>Browse questions</Button>
              </div>
            </CardContent>
          </Card>
          {/* card 2  */}
          <Card className="p-5 bg-white rounded-2xl border border-slate-200">
            <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <VerifiedUserOutlinedIcon className="text-xl text-primary " />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Authentication
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-gray-500"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium tempore ex commodi eligendi expedita soluta rerum
                doloribus minus adipisci.
              </Typography>
              <div className="pt-5">
                <Button>Browse questions</Button>
              </div>
            </CardContent>
          </Card>
          {/* cart 3  */}
          <Card className="p-5 bg-white rounded-2xl border border-slate-200">
            <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <PriceChangeOutlinedIcon className="text-xl text-primary " />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Limits & pricing
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-gray-500"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium tempore ex commodi eligendi expedita soluta rerum
                doloribus minus adipisci.
              </Typography>
              <div className="pt-5">
                <Button>Browse questions</Button>
              </div>
            </CardContent>
          </Card>
          {/* cart 4  */}
          <Card className="p-5 bg-white rounded-2xl border border-slate-200">
            <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <ConstructionOutlinedIcon className="text-xl text-primary " />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Advanced settings
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-gray-500"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium tempore ex commodi eligendi expedita soluta rerum
                doloribus minus adipisci.
              </Typography>
              <div className="pt-5">
                <Button>Browse questions</Button>
              </div>
            </CardContent>
          </Card>
          {/* cart 5  */}
          <Card className="p-5 bg-white rounded-2xl border border-slate-200">
            <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <WebhookOutlinedIcon className="text-xl text-primary " />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                API endpoints
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-gray-500"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium tempore ex commodi eligendi expedita soluta rerum
                doloribus minus adipisci.
              </Typography>
              <div className="pt-5">
                <Button>Browse questions</Button>
              </div>
            </CardContent>
          </Card>
          {/* cart 6  */}
          <Card className="p-5 bg-white rounded-2xl border border-slate-200">
            <div className=" bg-blue-200 text-center mx-auto rounded-xl w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
              <ApiOutlinedIcon className="text-xl text-primary " />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Enterprise features
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-gray-500"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium tempore ex commodi eligendi expedita soluta rerum
                doloribus minus adipisci.
              </Typography>
              <div className="pt-5">
                <Button>Browse questions</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mx-auto 2xl:mx-24">
        <Typography
          variant="h2"
          mt={5}
          mb={3}
          fontWeight="bold"
          className="text-primary"
          sx={{ fontSize: ["24px", "24px", "48px"] }}
        >
          Popular questions?
        </Typography>
        <div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 lg:gap-6 xl:gap-10 gap-4 text-center mx-auto 2xl:mx-24 justify-center item-center mt-10">
            {/* card 1  */}
            <Accordion className="rounded-xl">
              <AccordionSummary>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold"
                >
                  How to contact support?
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
            {/* card 2  */}
            <Accordion className="rounded-xl">
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
            <Accordion className="rounded-xl">
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
            <Accordion className="rounded-xl">
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
        <HelpCenterCard></HelpCenterCard>
      </div>
    </Container>
  );
};

export default page;
