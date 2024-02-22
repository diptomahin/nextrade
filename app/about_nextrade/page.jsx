import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import shakeHand from "../../assets/shakeHand.png";
import mission from "../../assets/mission.png";
import tradeCurrency from "../../assets/tradeCurrency.png";
import investment from "../../assets/investment.png";
import cryptocurrencyTrade from "../../assets/cryptocurrencyTrade.png";
import Image from "next/image";
import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
import Subtitle from "@/components/library/Subtitle";

// add title in metadata
export const metadata = {
  title: "NexTrade - AboutNexTrade ",
  description: 'About page from Nextrade',
};

const AboutNexTrade = () => {
  return (
    <Container className="py-20 text-darkGray">
      <Title>About NexTrade</Title>
      <Subtitle>
        Welcome to nexTrade – Your Gateway to Global Trading Excellence!
      </Subtitle>

      {/* What is NexTrade */}
      <Title className="text-left"> What is NexTrade ?</Title>
      <Stack
        flexDirection={{ xs: "column-reverse", md: "row" }}
        gap={{ xs: 3, sm: 5, md: 7 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack flex={1}>
          <Typography
            align="justify"
            sx={{ fontSize: ["16px", "20px", "24px"] }}
          >
            At nexTrade, we transcend the conventional definition of an online
            trading platform; we&apos;ve created a dynamic and innovative space
            where traders, investors, and enthusiasts converge to delve into the
            boundless possibilities within the intricate landscape of financial
            markets. With a foundation built on an unwavering commitment to
            excellence, we embark on a mission to empower you, not merely as
            participants but as architects of your financial destiny. This is
            more than a platform; it&apos;s an empowering ecosystem designed to
            elevate and transform your entire financial journey.
          </Typography>
        </Stack>
        <Stack flex={1} direction="row" justifyContent="flex-end">
          <Image src={shakeHand} alt="business growth"></Image>
        </Stack>
      </Stack>

      {/* Our Mission */}
      <Typography
        className="text-primary"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: ["20px", "24px", "40px"],
          marginTop: { xs: "30px", lg: "0px" },
        }}
      >
        Our Mission
      </Typography>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 3, sm: 5, md: 7 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack flex={1} direction="row">
          <Image
            src={mission}
            alt="business growth"
            style={{ width: "auto", height: "auto" }}
          ></Image>
        </Stack>
        <Stack flex={1}>
          <Typography
            align="justify"
            sx={{ fontSize: ["16px", "20px", "24px"] }}
          >
            Our mission at nexTrade is to provide an expansive, seamless, and
            highly secure trading experience, unlocking the vast potential of
            global markets for everyone. Committed to fostering financial
            inclusively, we empower our users to trade with confidence and
            embrace a world of diverse investment opportunities. By prioritizing
            accessibility and security, nexTrade is dedicated to shaping a
            future where trading is not just a transaction but a transformation
            journey towards financial empowerment for all.
          </Typography>
        </Stack>
      </Stack>

      {/* Our offerings */}
      <Typography
        marginTop={5}
        className="text-primary"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center", fontSize: ["20px", "24px", "40px"] }}
      >
        Our Offerings
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: 275,
              minHeight: 295,
              textAlign: "center",
              backgroundColor: "#eff6ff",
              borderRadius: "8px",
              transition: "1s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardContent>
              <Image
                src={tradeCurrency}
                className=" mx-auto"
                alt="trade currency"
                style={{ width: "180px", height: "auto" }}
              ></Image>
              <Typography variant="h6" fontWeight="bold">
                Trade Currencies
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Unlock the potential of the forex market with our currency
                trading options. Trade major, minor, and exotic pairs with
                confidence.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: 275,
              minHeight: 295,
              textAlign: "center",
              backgroundColor: "#eff6ff",
              borderRadius: "8px",
              transition: "1s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardContent>
              <Image
                src={investment}
                className="mx-auto"
                alt="investment image"
                style={{ width: "180px", height: "auto" }}
              ></Image>
              <Typography variant="h6" fontWeight="bold">
                Invest in Shares
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Diversify your portfolio by investing in a wide range of shares.
                Explore opportunities across industries and regions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: 275,
              minHeight: 295,
              textAlign: "center",
              backgroundColor: "#eff6ff",
              borderRadius: "8px",
              transition: "1s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardContent>
              <Image
                src={cryptocurrencyTrade}
                className="mx-auto"
                alt="crypto image"
                style={{ width: "180px", height: "auto" }}
              ></Image>
              <Typography variant="h6" fontWeight="bold">
                Cryptocurrency Trading
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Join the digital revolution with cryptocurrency trading. Trade
                Bitcoin, Ethereum, USD Coin, Litecoin, and more with ease.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutNexTrade;
