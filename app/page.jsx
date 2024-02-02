// import Modal from "@/components/home/Modal/Modal";
import Banner from "@/components/root_comp/home_comp/Banner/Banner";
import InvestSolutions from "@/components/root_comp/home_comp/InvestSolutions";
import LiveData from "@/components/root_comp/home_comp/LiveData";
import NewsLetter from "@/components/root_comp/home_comp/NewsLetter";
import Services from "@/components/root_comp/home_comp/Services";
import StartTrading from "@/components/root_comp/home_comp/StartTrading";
import Subscription from "@/components/root_comp/home_comp/Subscription";
import TradingStep from "@/components/root_comp/home_comp/TradingStep";
import WhyChooseUs from "@/components/root_comp/home_comp/WhyChooseUs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <TradingStep />
      <InvestSolutions />
      <StartTrading />
      <Services />
      <WhyChooseUs />
      <LiveData />
      <Subscription />
      <NewsLetter />
    </main>
  );
}
