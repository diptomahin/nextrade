import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Icon1 from "@/assets/services/icon-1.png";
import Icon2 from "@/assets/services/icon-2.png";
import Icon3 from "@/assets/services/icon-3.png";
import Icon4 from "@/assets/services/icon-4.png";
import Icon5 from "@/assets/services/icon-5.png";
import Icon6 from "@/assets/services/icon-6.png";

export default function page() {
  return (
    <div className="text-center mt-10 mx-auto">
      <div>
        <h1 className="text-3xl font-bold mx-auto text-center">
          <span className="text-[#22356b]">Service</span> We Offer
        </h1>
        <p className="mt-1 text-gray-600 w-96 text-center mx-auto">
          We offer the best services around from installations to repairs,
          maintenance, and more!
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:gap-6 xl:gap-20 gap-4 text-center mx-auto justify-center grid-cols-1 item-center mt-10">
        <Card className="py-8 px-2 rounded-lg">
          <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
              variant="h5"
              component="div"
              className="font-semibold"
            >
              Trading Education and Training
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Equip yourself with the knowledge and skills needed for successful
              trading through comprehensive educational programs, workshops, and
              training sessions.
            </Typography>
          </CardContent>
        </Card>
        <Card className="py-8 px-2 rounded-lg">
          <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
              variant="h5"
              component="div"
              className="font-semibold"
            >
              Market Analysis and Insights
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stay ahead of market trends with in-depth analysis and actionable
              insights, enabling informed decision-making for your trading
              activities.
            </Typography>
          </CardContent>
        </Card>
        <Card className="py-8 px-2 rounded-lg">
          <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
              variant="h5"
              component="div"
              className="font-semibold"
            >
              Cryptocurrency Investment Strategies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Navigate the complexities of the cryptocurrency market with
              specialized strategies designed to maximize returns and minimize
              volatility.
            </Typography>
          </CardContent>
        </Card>
        <Card className="py-8 px-2 rounded-lg">
          <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
              variant="h5"
              component="div"
              className="font-semibold"
            >
              Real-time Market Alerts
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Receive timely alerts on market movements, news, and key events,
              ensuring you stay informed and can act promptly to capitalize on
              emerging opportunities.
            </Typography>
          </CardContent>
        </Card>
        <Card className="py-8 px-2 rounded-lg">
          <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
              variant="h5"
              component="div"
              className="font-semibold"
            >
              Customized Portfolio Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Equip yourself with the knowledge and skills needed for successful
              trading through comprehensive educational programs, workshops, and
              training sessions.
            </Typography>
          </CardContent>
        </Card>
        <Card className="py-8 px-2 rounded-lg">
          <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
            <Image
              src={Icon5}
              alt="Trad Icon"
              width={400}
              height={500}
              placeholder="blur"
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-semibold"
            >
              Algorithmic Trading Solutions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Leverage cutting-edge algorithms to automate your trading
              strategies, ensuring precise execution and optimal returns.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
