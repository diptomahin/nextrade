import { Accordion, AccordionDetails, AccordionSummary, Container, Hidden, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import masterCard from "@/assets/masterCard.png"
import visaCard from "@/assets/visaLogo.png"
import paypalLogo from "@/assets/paypalLogo.png"
import discoverLogo from "@/assets/discover-logo-2.png"
import UnionpayLogo from "@/assets/Union-pay.png"
import maestroLogo from "@/assets/Maestro.png"
import dinersClub from "@/assets/dinersClub.png"
import bitcoin from "@/assets/bitcoin.png"
import Ethereum from "@/assets/ethereum.png"
import LiteCoin from "@/assets/LiteCoin.png"
import USDCoin from "@/assets/USD Coin.png"
import Marquee from "react-fast-marquee";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const PaymentMethods = () => {
    return (
        <div>
            <Typography variant="h2" mt={5} mb={3} fontWeight="bold" className='text-primary-darkLightBlue' sx={{ textAlign: "center", fontSize: ["28px", "28px", "52px"] }}>Payment methods</Typography>
            <Typography variant="h6" gutterBottom maxWidth={700} marginX="auto" sx={{ textAlign: "center", fontSize: ["16px", "20px", "24px"]}}>Explore our varied deposit and withdrawal options. Learn about our payment methods and their usage for a seamless financial experience.</Typography>
            <Stack my={5}>
            <Marquee direction='right' gradient="30px">
                <Image className='w-28 md:w-48 mx-12' src={masterCard} alt='masterCard-logo'></Image>
                <Image className='w-28 md:w-48 mx-12' src={visaCard} alt='visaCard-logo'></Image>
                <Image className='w-28 md:w-60 mx-12' src={maestroLogo} alt='meastro-logo'></Image>
                <Image className='w-28 md:w-52 mx-12' src={dinersClub} alt='dinersClub-logo'></Image>
                <Image className='w-28 md:w-60 mx-12' src={discoverLogo} alt='discover-logo'></Image>
                <Image className='w-28 md:w-60 mx-12' src={UnionpayLogo} alt='unionpay-logo'></Image>
                <Image className='w-28 md:w-60 mx-12' src={paypalLogo} alt='paypal-logo'></Image>
            </Marquee>
            </Stack>
            <Accordion defaultExpanded sx={{marginY:"28px"}}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon sx={{ color: "#1D366F" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{fontSize: ["16px", "20px", "24px"]}} className='text-primary-darkLightBlue' fontWeight="bold">Credit and Debit Cards</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table>
                        <TableHead sx={{ borderBottom: "2px solid #1D366F" }}>
                            <TableRow >
                                <TableCell><Typography fontWeight="bold" className='text-primary-darkLightBlue'>Methods</Typography></TableCell>
                                <TableCell><Typography fontWeight="bold" className='text-primary-darkLightBlue'>Currencies Accepted</Typography></TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}><Typography fontWeight="bold" color="#1D366F">Details</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Visa */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={visaCard} alt="visa card"></Image>
                                </TableCell>
                                <TableCell>USD, EUR, GBP, etc.</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Global acceptance, secure transactions.</TableCell>
                            </TableRow>

                            {/* MasterCard */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={masterCard} alt="master card"></Image>
                                </TableCell>
                                <TableCell>USD, EUR, GBP, etc.</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Worldwide acceptance, cashback rewards, no annual fees.</TableCell>
                            </TableRow>

                            {/* MaestroCard */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={maestroLogo} alt="maestro card"></Image>
                                </TableCell>
                                <TableCell>EUR, GBP, INR, etc.</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }} >Accepted in multiple currencies, secure transactions.</TableCell>
                            </TableRow>

                            {/* PayPal */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24 my-6' src={paypalLogo} alt="paypal card"></Image>
                                </TableCell>
                                <TableCell>Multiple</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Swift, secure checkouts, linked account convenience.</TableCell>
                            </TableRow>

                            {/* Discover */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24 my-6' src={discoverLogo} alt="discover card"></Image>
                                </TableCell>
                                <TableCell>USD</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Secure transactions, cashback rewards.</TableCell>
                            </TableRow>

                            {/* DinerClub */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={dinersClub} alt="dinersClub card"></Image>
                                </TableCell>
                                <TableCell>USD, EUR, JPY, etc.</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Global acceptance, secure transactions.</TableCell>
                            </TableRow>

                            {/* UnionPay */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={UnionpayLogo} alt="union card"></Image>
                                </TableCell>
                                <TableCell>CNY, USD, EUR, etc.</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Global acceptance, robust security measures.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>

            {/* crypto currencies */}
            <Accordion sx={{marginBottom:"32px"}}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon sx={{ color: "#1D366F" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{fontSize: ["16px", "20px", "24px"]}} color="#1D366F" fontWeight="bold">Cryptocurrencies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table>
                        <TableHead sx={{ borderBottom: "2px solid #1D366F" }}>
                            <TableRow >
                                <TableCell><Typography fontWeight="bold" color="#1D366F">Methods</Typography></TableCell>
                                <TableCell><Typography fontWeight="bold" color="#1D366F">Currencies Accepted</Typography></TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}><Typography fontWeight="bold" color="#1D366F">Details</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Visa */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={bitcoin} alt="bitcoin"></Image>
                                </TableCell>
                                <TableCell>BTC</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Secure transactions, decentralized, borderless.</TableCell>
                            </TableRow>

                            {/* Ethereum */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={Ethereum} alt="Ethereum"></Image>
                                </TableCell>
                                <TableCell>ETH</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Smart contract support, decentralized transactions.</TableCell>
                            </TableRow>

                            {/* USD Coin */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={USDCoin} alt="USDCoin"></Image>
                                </TableCell>
                                <TableCell>USDC</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }} >Stablecoin pegged to USD, fast and secure transfers.</TableCell>
                            </TableRow>

                            {/* Litecoin */}
                            <TableRow>
                                <TableCell>
                                    <Image className='w-24' src={LiteCoin} alt="lite coin"></Image>
                                </TableCell>
                                <TableCell>LTC</TableCell>
                                <TableCell sx={{ display: ['none', 'table-cell'] }}>Fast transactions, low fees, secure blockchain.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default PaymentMethods;