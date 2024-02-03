// import Modal from "@/components/home/Modal/Modal";
import Banner from "@/components/home_comp/Banner";
import InvestSolutions from "@/components/home_comp/InvestSolutions";
import NewsLetter from "@/components/home_comp/NewsLetter";
import Services from "@/components/home_comp/Services";
import StartTrading from "@/components/home_comp/StartTrading";
import Subscription from "@/components/home_comp/Subscription";
import TradingStep from "@/components/home_comp/TradingStep";
import WhyChooseUs from "@/components/home_comp/WhyChooseUs";

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
      <NewsLetter />
    </main>
  );
}
