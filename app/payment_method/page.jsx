"use client";

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
import bitcoin from "../../assets/bitcoin.png";
import Ethereum from "../../assets/ethereum.png";
import LiteCoin from "../../assets/LiteCoin.png";
import USDCoin from "../../assets/USD Coin.png";
import Marquee from "react-fast-marquee";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utils/variants";

const PaymentMethods = () => {
  return (
    <Container className="py-20">
      <Title>Payment Methods</Title>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center text-darkGray font-medium"
      >
        Explore our varied deposit and withdrawal options. Learn about our
        payment methods and their usage for a seamless financial experience.
      </motion.p>
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
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
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
              <TableRow>
                <TableCell>
                  <Image
                    src={visaCard}
                    alt="visa card"
                    width={80}
                    height="auto"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  USD, EUR, GBP, etc.
                </TableCell>
                <TableCell
                  sx={{ display: ["none", "table-cell"] }}
                  className="text-darkGray"
                >
                  Global acceptance, secure transactions.
                </TableCell>
              </TableRow>

              {/* MasterCard */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={masterCard}
                    alt="master card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  USD, EUR, GBP, etc.
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Worldwide acceptance, cashback rewards, no annual fees.
                </TableCell>
              </TableRow>

              {/* MaestroCard */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={maestroLogo}
                    alt="maestro card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  EUR, GBP, INR, etc.
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Accepted in multiple currencies, secure transactions.
                </TableCell>
              </TableRow>

              {/* PayPal */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    className="my-6"
                    src={paypalLogo}
                    alt="paypal card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">Multiple</TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Swift, secure checkouts, linked account convenience.
                </TableCell>
              </TableRow>

              {/* Discover */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    className="my-6"
                    src={discoverLogo}
                    alt="discover card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">USD</TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Secure transactions, cashback rewards.
                </TableCell>
              </TableRow>

              {/* DinerClub */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={dinersClub}
                    alt="dinersClub card"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">
                  USD, EUR, JPY, etc.
                </TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Global acceptance, secure transactions.
                </TableCell>
              </TableRow>

              {/* UnionPay */}
              {/* <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={unionPayLogo} alt="union card"></Image>
                                </TableCell>
                                <TableCell>CNY, USD, EUR, etc.</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Global acceptance, robust security measures.</TableCell>
                            </TableRow> */}
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
          expandIcon={<ArrowDownwardIcon sx={{ color: "#1D366F" }} />}
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
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={bitcoin}
                    alt="bitcoin"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">BTC</TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Secure transactions, decentralized, borderless.
                </TableCell>
              </TableRow>

              {/* Ethereum */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={Ethereum}
                    alt="Ethereum"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">ETH</TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Smart contract support, decentralized transactions.
                </TableCell>
              </TableRow>

              {/* USD Coin */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={USDCoin}
                    alt="USDCoin"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">USDC</TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Stablecoin pegged to USD, fast and secure transfers.
                </TableCell>
              </TableRow>

              {/* Litecoin */}
              <TableRow>
                <TableCell>
                  <Image
                    width={80}
                    height="auto"
                    src={LiteCoin}
                    alt="lite coin"
                  ></Image>
                </TableCell>
                <TableCell className="text-darkGray">LTC</TableCell>
                <TableCell
                  className="text-darkGray"
                  sx={{ display: ["none", "table-cell"] }}
                >
                  Fast transactions, low fees, secure blockchain.
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
