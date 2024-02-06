"use client";
import Banner from "@/components/home_comp/banner/Banner";
import InvestSolutions from "@/components/home_comp/InvestSolutions";
import Map from "@/components/home_comp/map/Map";
import Services from "@/components/home_comp/Services";
import StartTrading from "@/components/home_comp/StartTrading";
import Subscription from "@/components/home_comp/subscription/Subscription";
import TradingStep from "@/components/home_comp/TradingStep";
import WhyChooseUs from "@/components/home_comp/WhyChooseUs";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);
  return (
    <main className="overflow-hidden text-zinc-100 font-montserrat">
      <div
        className="fixed w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-difference z-[150] blur-[60px] bg-primary rounded-full"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <Banner />
      <TradingStep />
      <InvestSolutions />
      <StartTrading />
      <Services />
      <Subscription />
      <WhyChooseUs />
      <Map />
    </main>
  );
}
