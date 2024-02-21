import Banner from "@/components/home_comp/banner/Banner";
import InvestSolutions from "@/components/home_comp/InvestSolutions";
import Map from "@/components/home_comp/map/Map";
import Services from "@/components/home_comp/Services";
import StartTrading from "@/components/home_comp/StartTrading";
import Subscription from "@/components/home_comp/subscription/Subscription";
import TradingStep from "@/components/home_comp/TradingStep";
import WhyNexTrade from "@/components/home_comp/WhyNexTrade";
import Modal from "@/components/home_comp/Modal";

export default function Home() {
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
    </main>
  );
}
