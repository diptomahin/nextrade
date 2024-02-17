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
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { loading } = useAuth();

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-secondary">
            .<span className="text-primary">.</span>.
          </span>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden text-zinc-100 font-montserrat">
      <div
        className="fixed w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-difference z-[150] blur-[60px] bg-primary rounded-full"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <Modal />
      <Banner />
      <TradingStep />
      <InvestSolutions />
      <StartTrading />
      <Services />
      <Subscription />
      <WhyNexTrade />
      <Map />
      <FacebookProvider appId="429056069676911" chatSupport>
        <CustomChat 
          pageId="108051777809659" 
          minimized={false} 
          loggedInGreeting="Welcome! How can we assist you today?"
          loggedOutGreeting="Welcome! Feel free to ask any questions."
        />
      </FacebookProvider>
    </main>
  );
}
