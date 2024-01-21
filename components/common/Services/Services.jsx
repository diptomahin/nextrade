"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Icon1 from "../../../assets/Services/icon-1.png";
import Icon2 from "../../../assets/Services/icon-2.png";
import Icon3 from "../../../assets/Services/icon-3.png";
import Icon4 from "../../../assets/Services/icon-4.png";
import Icon5 from "../../../assets/Services/icon-5.png";
import Icon6 from "../../../assets/Services/icon-6.png";

import Container from "@/components/library/Container";

const Services = () => {
  return (
    <Container className="py-28">
      <div className="text-center mx-auto">
        <div>
          <h1 className="lg:text-3xl md:text-4xl text-6xl my-4 text-primary font-bold mx-auto text-center">
            Service We Offer
          </h1>

          <p className="mt-1  xl:w-96 text-center mx-auto font-medium text-gray-500">
            We offer the best services around from installations to repairs,
            maintenance, and more!
          </p>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-6 xl:gap-10 gap-4 text-center mx-auto justify-center item-center mt-10">
          {/* cart 1  */}
          <Card className="py-14 px-2 rounded-lg border border-gray-100">
            <div className="w-24 h-fit text-center mx-auto bg-[#22356b] rounded-full">
              <Image
                src={Icon1}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Trading Education and Training
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-semibold text-gray-400">
                Equip yourself with the knowledge and skills needed for
                successful trading through comprehensive educational programs,
                workshops, and training sessions.
              </Typography>
            </CardContent>
          </Card>
          {/* cart 2  */}
          <Card className="py-14 px-2 rounded-lg border border-gray-100">
            <div className="w-24 h-fit text-center mx-auto bg-[#22356b] rounded-full">
              <Image
                src={Icon3}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Market Analysis and Insights
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-semibold text-gray-400">
                Stay ahead of market trends with in-depth analysis and
                actionable insights, enabling informed decision-making for your
                trading activities.
              </Typography>
            </CardContent>
          </Card>
          {/* cart 3  */}
          <Card className="py-14 px-2 rounded-lg border border-gray-100">
            <div className="w-24 h-fit text-center mx-auto bg-[#22356b] rounded-full">
              <Image
                src={Icon2}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Cryptocurrency Investment Strategies
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-semibold text-gray-400">
                Navigate the complexities of the cryptocurrency market with
                specialized strategies designed to maximize returns and minimize
                volatility.
              </Typography>
            </CardContent>
          </Card>
          {/* cart 4  */}
          <Card className="py-14 px-2 rounded-lg border border-gray-100">
            <div className="w-24 h-fit text-center mx-auto bg-[#22356b] rounded-full">
              <Image
                src={Icon4}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Real-time Market Alerts
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-semibold text-gray-400">
                Receive timely alerts on market movements, news, and key events,
                ensuring you stay informed and can act promptly to capitalize on
                emerging opportunities.
              </Typography>
            </CardContent>
          </Card>
          {/* cart 5  */}
          <Card className="py-14 px-2 rounded-lg border border-gray-100">
            <div className="w-24 h-fit text-center mx-auto bg-[#22356b] rounded-full">
              <Image
                src={Icon6}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Customized Portfolio Management
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-semibold text-gray-400">
                Equip yourself with the knowledge and skills needed for
                successful trading through comprehensive educational programs,
                workshops, and training sessions.
              </Typography>
            </CardContent>
          </Card>
          {/* cart 6  */}
          <Card className="py-14 px-2 rounded-lg border border-gray-100">
            <div className="w-24 h-fit text-center mx-auto bg-[#22356b] rounded-full">
              <Image
                src={Icon5}
                alt="Trad Icon"
                width={300}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-semibold"
              >
                Algorithmic Trading Solutions
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-semibold text-gray-400">
                Leverage cutting-edge algorithms to automate your trading
                strategies, ensuring precise execution and optimal returns.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Services;
