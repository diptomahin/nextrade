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
import Translate from "@/components/home_comp/Translate";
import useAuth from "@/hooks/useAuth";
// import { FacebookProvider, CustomChat } from "react-facebook";

export default function Home() {
  const { loading } = useAuth();

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
      <Modal />
      <Banner />
      <TradingStep />
      <InvestSolutions />
      <StartTrading />
      <Services />
      <Subscription />
      <WhyNexTrade />
      <Map />
      <Translate />
      {/* <FacebookProvider appId="429056069676911">
        <CustomChat
          pageId="108051777809659"
          minimized={false}
          loggedInGreeting="Welcome back! Seeking assistance? Ariful from NexTrade is here to help."
          loggedOutGreeting="Welcome back! Seeking assistance? Ariful from NexTrade is here to help."
        />
      </FacebookProvider> */}
    </main>
  );
}
