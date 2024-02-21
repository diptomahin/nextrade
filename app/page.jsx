"use client";
import Banner from "@/components/home_comp/banner/Banner";
import InvestSolutions from "@/components/home_comp/InvestSolutions";
import Map from "@/components/home_comp/map/Map";
import Services from "@/components/home_comp/Services";
import StartTrading from "@/components/home_comp/StartTrading";
import Subscription from "@/components/home_comp/subscription/Subscription";
import TradingStep from "@/components/home_comp/TradingStep";
import WhyNexTrade from "@/components/home_comp/WhyNexTrade";
import Modal from "@/components/home_comp/Modal";
import CustomerChat from "@/components/home_comp/CustomerChat";
import Translate from "@/components/home_comp/Translate";

export default function Home() {
  return (
    <main className="overflow-hidden text-zinc-100 font-montserrat">
      <Modal />
      <Banner />
      <Translate />
      <TradingStep />
      <InvestSolutions />
      <StartTrading />
      <Services />
      <Subscription />
      <WhyNexTrade />
      <Map />
      <CustomerChat />
    </main>
  );
}