import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import masterCard from "../../assets/masterCard.png";
import visaCard from "../../assets/visaLogo.png";
import paypalLogo from "../../assets/paypalLogo.png";
import discoverLogo from "../../assets/discover-logo-2.png";
import maestroLogo from "../../assets/Maestro.png";
import dinersClub from "../../assets/dinersClub.png";
import bitcoin from "../../assets/coinImages/bitcoin.png";
import Ethereum from "../../assets/coinImages/ethereum.png";
import LiteCoin from "../../assets/coinImages/ltc.png";
import Marquee from "react-fast-marquee";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
import Subtitle from "@/components/library/Subtitle";

// add title in metadata
export const metadata = {
  title: "Payment Methods - NexTrade",
  description: "Payment Methods page from Nextrade",
};

const PaymentMethods = () => {
  return (
    <Container className="py-20">
      <Title>Payment Methods</Title>
      <Subtitle>
        {" "}
        Explore our varied deposit and withdrawal options. Learn about our
        payment methods and their usage for a seamless financial experience.
      </Subtitle>
      <Stack my={5}>
        <Marquee direction="right" gradient="30px" gradientColor="#181e2c">
          <Image
            style={{ width: "100px", height: "auto" }}
            className="mx-12"
            src={masterCard}
            alt="masterCard-logo"
          ></Image>
          <Image
            style={{ width: "100px", height: "auto" }}
            className=" mx-12"
            src={visaCard}
            alt="visaCard-logo"
          ></Image>
          <Image
            style={{ width: "100px", height: "auto" }}
            className="mx-12"
            src={maestroLogo}
            alt="meastro-logo"
          ></Image>
          <Image
            style={{ width: "100px", height: "auto" }}
            className="mx-12"
            src={dinersClub}
            alt="dinersClub-logo"
          ></Image>
          <Image
            style={{ width: "100px", height: "auto" }}
            className="mx-12"
            src={discoverLogo}
            alt="discover-logo"
          ></Image>
          <Image
            className="mx-12"
            src={paypalLogo}
            alt="paypal-logo"
            style={{ width: "100px", height: "auto" }}
          ></Image>
        </Marquee>
      </Stack>
      <Accordion
        defaultExpanded
        sx={{
          marginY: "25px",
          backgroundColor: "#1d2334",
          border: "1px solid #2c3750",
          borderRadius: "0.75rem",
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownwardIcon sx={{ color: "#40a0ff" }} />} aria-controls="panel1-content" id="panel1-header">
          <Typography
            sx={{ fontSize: ["16px", "20px", "24px"] }}
            className="text-zinc-100"
            fontWeight="bold"
          >
            Credit and Debit Cards
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead sx={{ borderBottom: "2px solid #2c3750" }}>
              <TableRow>
                <TableCell>
                  <Typography fontWeight="bold" className="text-zinc-100">
                    Methods
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold" className="text-zinc-100">
                    Currencies Accepted
                  </Typography>
                </TableCell>
                <TableCell sx={{ display: ["none", "table-cell"] }}>
                  <Typography fontWeight="bold" className="text-zinc-100">
                    Details
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Visa */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <Image
                    src={visaCard}
                    alt="visa card"
                    width={80}
                    height="auto"
                  ></Image>
                </TableCell>
                <TableCell >
                  <Typography className="text-darkGray">
                    USD, EUR, GBP, etc.
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Global acceptance, secure transactions.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* MasterCard */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={masterCard}
                    alt="master card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">
                    USD, EUR, GBP, etc.
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Worldwide acceptance, cashback rewards, no annual fees.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* MaestroCard */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={maestroLogo}
                    alt="maestro card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">
                    EUR, GBP, INR, etc.
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Accepted in multiple currencies, secure transactions.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* PayPal */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    className="my-6"
                    src={paypalLogo}
                    alt="paypal card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">
                    Multiple
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Swift, secure checkouts, linked account convenience.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* Discover */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    className="my-6"
                    src={discoverLogo}
                    alt="discover card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">
                    USD
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Secure transactions, cashback rewards.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* DinerClub */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={dinersClub}
                    alt="dinersClub card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">

                    USD, EUR, JPY, etc.
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">

                    Global acceptance, secure transactions.
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>

      {/* crypto currencies */}
      <Accordion
        sx={{
          marginY: "25px",
          backgroundColor: "#1d2334",
          border: "1px solid #2c3750",
          borderRadius: "0.75rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#40a0ff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{ fontSize: ["16px", "20px", "24px"] }}
            className="text-zinc-100"
            fontWeight="bold"
          >
            Cryptocurrencies
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <Typography fontWeight="bold" className="text-zinc-100">
                    Methods
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold" className="text-zinc-100">
                    Currencies Accepted
                  </Typography>
                </TableCell>
                <TableCell sx={{ display: ["none", "table-cell"] }}>
                  <Typography fontWeight="bold" className="text-zinc-100">
                    Details
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Visa */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height="auto"
                      src={bitcoin}
                      alt="bitcoin"
                    ></Image>
                    <p className="text-darkGray">Bitcoin</p>
                  </div>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">
                    BTC
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Secure transactions, decentralized, borderless.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* Ethereum */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height="auto"
                      src={Ethereum}
                      alt="ethereum"
                    ></Image>
                    <p className="text-darkGray">Ethereum</p>
                  </div>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">
                    ETH
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Smart contract support, decentralized transactions.
                  </Typography>
                </TableCell>
              </TableRow>

              {/* Litecoin */}
              <TableRow sx={{ borderBottom: "2px solid #2c3750" }}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height="auto"
                      src={LiteCoin}
                      alt="litecoin"
                    ></Image>
                    <p className="text-darkGray">LiteCoin</p>
                  </div>
                </TableCell>
                <TableCell className="text-darkGray">
                  <Typography className="text-darkGray">
                    LTC
                  </Typography>
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  <Typography className="text-darkGray">
                    Fast transactions, low fees, secure blockchain.
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default PaymentMethods;
