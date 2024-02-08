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
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utils/variants";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import HelpCenterCard from "@/components/library/HelpCenterCard";
import Title from "@/components/library/Title";

const page = () => {
  return (
    <Container className="py-20 overflow-hidden">
      <Title>Welcome to our Help Center</Title>
      <Typography
        variant="h6"
        gutterBottom
        maxWidth={700}
        marginX="auto"
        sx={{ textAlign: "center", fontSize: ["16px", "20px", "24px"] }}
      ></Typography>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center text-darkGray font-medium"
      >
        Welcome to our help center! Need assistance? We&apos;re here for you.
        Explore our resources or contact our support team. Your satisfaction is
        our priority!
      </motion.p>
      <div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-10 text-darkGray">
          {/* card 1  */}

          <motion.Card
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded-xl text-white"
          >
            <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
              <NotStartedOutlinedIcon className="w-14 h-14 text-primary" />
              <h3 className="text-lg font-semibold">Getting started</h3>
            </div>
            <p className="text-sm text-justify font-medium mt-5 text-darkGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium tempore ex commodi eligendi expedita soluta rerum
              doloribus minus adipisci.
            </p>
          </motion.Card>

          {/* card tow */}
          <motion.Card
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded-xl text-white"
          >
            <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
              <VerifiedUserOutlinedIcon className="w-14 h-14 text-primary" />
              <h3 className="text-lg font-semibold"> Authentication</h3>
            </div>
            <p className="text-sm text-justify font-medium mt-5 text-darkGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium tempore ex commodi eligendi expedita soluta rerum
              doloribus minus adipisci.
            </p>
          </motion.Card>

          {/* card three */}
          <motion.Card
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded-xl text-white"
          >
            <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
              <PriceChangeOutlinedIcon className="w-14 h-14 text-primary" />
              <h3 className="text-lg font-semibold">Limits & pricing</h3>
            </div>
            <p className="text-sm text-justify font-medium mt-5 text-darkGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium tempore ex commodi eligendi expedita soluta rerum
              doloribus minus adipisci.
            </p>
          </motion.Card>

          {/* card four */}
          <motion.Card
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded-xl text-white"
          >
            <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
              <ConstructionOutlinedIcon className="w-14 h-14 text-primary" />
              <h3 className="text-lg font-semibold"> Advanced settings</h3>
            </div>
            <p className="text-sm text-justify font-medium mt-5 text-darkGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium tempore ex commodi eligendi expedita soluta rerum
              doloribus minus adipisci.
            </p>
          </motion.Card>

          {/* card five */}
          <motion.Card
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded-xl text-white"
          >
            <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
              <WebhookOutlinedIcon className="w-14 h-14 text-primary" />
              <h3 className="text-lg font-semibold"> API endpoints</h3>
            </div>
            <p className="text-sm text-justify font-medium mt-5 text-darkGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium tempore ex commodi eligendi expedita soluta rerum
              doloribus minus adipisci.
            </p>
          </motion.Card>

          {/* card six */}
          <motion.Card
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded-xl text-white"
          >
            <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
              <ApiOutlinedIcon className="w-14 h-14 text-primary" />
              <h3 className="text-lg font-semibold"> Enterprise features</h3>
            </div>
            <p className="text-sm text-justify font-medium mt-5 text-darkGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium tempore ex commodi eligendi expedita soluta rerum
              doloribus minus adipisci.
            </p>
          </motion.Card>
        </div>
      </div>
      <div className="mx-auto 2xl:mx-24">
        <Title>Popular questions?</Title>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10 text-darkGray">
            {/* card 1  */}
            <Accordion className="rounded-xl">
              <AccordionSummary className="rounded-xl">
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-semibold "
                >
                  How to contact support?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="rounded-xl">
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
