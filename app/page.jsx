import Banner from "@/components/home_comp/banner/Banner";
import InvestSolutions from "@/components/home_comp/InvestSolutions";
import Map from "@/components/home_comp/map/Map";
import Services from "@/components/home_comp/Services";
import StartTrading from "@/components/home_comp/StartTrading";
import TradingStep from "@/components/home_comp/TradingStep";
import WhyNexTrade from "@/components/home_comp/WhyNexTrade";
import Testimonials from "@/components/home_comp/Testimonials";
import Modal from "@/components/home_comp/Modal";

// add title in metadata
export const metadata = {
  title: "Home - NexTrade",
  description: "Home page from Nextrade",
};

export default function Home() {
  return (
    <main className="overflow-hidden text-zinc-100 font-montserrat">
      <Banner />
      <TradingStep />
      <InvestSolutions />
      <StartTrading />
      <Services />
      <WhyNexTrade />
      <Testimonials />
      <Map />
      <Modal />
    </main>
  );
}