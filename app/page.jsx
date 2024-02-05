import Banner from "@/components/home/banner/Banner";
import InvestSolutions from "@/components/home/InvestSolutions";
import Map from "@/components/home/map/Map";
import Services from "@/components/home/Services";
import StartTrading from "@/components/home/StartTrading";
import Subscription from "@/components/home/subscription/Subscription";
import TradingStep from "@/components/home/TradingStep";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="overflow-hidden bg-darkBG text-zinc-100 font-montserrat">
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
