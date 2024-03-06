import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import icon1 from "../../assets/whyChooseUs-Icons/icon-1.png";
import icon2 from "../../assets/whyChooseUs-Icons/icon-2.png";
import icon3 from "../../assets/whyChooseUs-Icons/icon-3.png";
import icon4 from "../../assets/whyChooseUs-Icons/icon-4.png";
import icon5 from "../../assets/whyChooseUs-Icons/icon-5.png";
import icon6 from "../../assets/whyChooseUs-Icons/icon-6.png";
import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
import Subtitle from "@/components/library/Subtitle";

// add title in metadata
export const metadata = {
  title: "Why NexTrade - NexTrade",
  description: "Why NexTrade page from Nextrade",
};

const WhyChooseUs = () => {
  return (
    <Container className="py-24">
      <Title>Why NexTrade ?</Title>
      <Subtitle>
        Earning Client Trust: Our Pledge to Excellence. Millions Choose Us for
        Leading Online Trading Services.
      </Subtitle>

      <Grid my={5} container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            className="bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl rounded text-white"
            sx={{
              minHeight: 295,
              textAlign: "center",
              transition: "1s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardContent>
              <Image src={icon1} className="mx-auto w-24" alt="icon"></Image>
              <Typography my={3} variant="h6" fontWeight="bold" className="text-darkGray">
                Comprehensive Trading Options
              </Typography>
              <Typography sx={{ fontSize: "14px" }} className="text-darkGray">
                At nexTrade, we offer a diverse range of financial instruments,
                including currencies, shares, and cryptocurrencies. Whether
                you&apos;re a seasoned trader or a beginner, our platform
                provides the flexibility you need to explore and invest in a
                variety of markets.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
           className="bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl rounded text-white"
           sx={{
             minHeight: 295,
             textAlign: "center",
             transition: "1s",
             cursor: "pointer",
             "&:hover": { transform: "scale(1.1)" },
           }}
          >
            <CardContent>
              <Image src={icon2} className="mx-auto w-24" alt="icon"></Image>
              <Typography my={3} variant="h6" fontWeight="bold" className="text-darkGray">
                Cutting-Edge Technology
              </Typography>
              <Typography sx={{ fontSize: "14px" }} className="text-darkGray">
                Experience trading at the forefront of innovation. Our platform
                is powered by cutting-edge technology, ensuring a seamless and
                responsive user experience. Enjoy real-time market data,
                advanced charting tools, and lightning-fast execution.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            className="bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl rounded text-white"
            sx={{
              minHeight: 295,
              textAlign: "center",
              transition: "1s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardContent>
              <Image src={icon3} className="mx-auto w-24" alt="icon"></Image>
              <Typography my={3} variant="h6" fontWeight="bold" className="text-darkGray">
                Security You Can Trust
              </Typography>
              <Typography sx={{ fontSize: "14px" }} className="text-darkGray">
                Your security is our top priority. nexTrade employs
                state-of-the-art security measures, including encryption
                protocols and two-factor authentication. Trade with confidence,
                knowing that your assets and personal information are
                safeguarded.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            className="bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl rounded text-white"
            sx={{
              minHeight: 295,
              textAlign: "center",
              transition: "1s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardContent>
              <Image src={icon4} className="mx-auto w-24" alt="icon"></Image>
              <Typography my={3} variant="h6" fontWeight="bold" className="text-darkGray">
                User-Friendly Interface
              </Typography>
              <Typography sx={{ fontSize: "14px" }} className="text-darkGray">
                Navigating the financial markets should be intuitive. Our
                user-friendly interface is designed to make trading easy for
                everyone. Accessible features and a clean layout ensure a
                hassle-free experience, whether you&apos;re on a desktop or
                mobile device.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            className="bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl rounded text-white"
            sx={{
              minHeight: 295,
              textAlign: "center",
              transition: "1s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardContent>
              <Image src={icon5} className="mx-auto w-24" alt="icon"></Image>
              <Typography my={3} variant="h6" fontWeight="bold" className="text-darkGray">
                Educational Resources
              </Typography>
              <Typography sx={{ fontSize: "14px" }} className="text-darkGray">
                Empower yourself with knowledge. nexTrade provides a wealth of
                educational resources, including tutorials, market analysis, and
                expert insights. Stay informed and make informed decisions about
                your investments. Empower with nexTrade&apos;s education for confident investing.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
           className="bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl rounded text-white"
           sx={{
             minHeight: 295,
             textAlign: "center",
             transition: "1s",
             cursor: "pointer",
             "&:hover": { transform: "scale(1.1)" },
           }}
          >
            <CardContent>
              <Image src={icon6} className="mx-auto w-24" alt="icon"></Image>
              <Typography my={3} variant="h6" fontWeight="bold" className="text-darkGray">
                Responsive Customer Support
              </Typography>
              <Typography sx={{ fontSize: "14px" }} className="text-darkGray">
                We value your experience. Our dedicated customer support team is
                available to assist you with any queries or concerns. Whether
                you&apos;re a beginner or an experienced trader, we&apos;re here
                to ensure your journey with nexTrade is smooth and enjoyable.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
