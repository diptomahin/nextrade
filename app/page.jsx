import Services from "@/components/home/Services";
import Banner from "@/components/home/Banner/Banner";
import InvestmentSolutions from "@/components/home/InvestmentSolutions/InvestmentSolutions";
import NewsLetter from "@/components/home/NewsLetter/NewsLetter";
import StartTrading from "@/components/home/StartTrading/StartTrading";
import Subscription from "@/components/home/Subscription/Subscription";
import TradingStep from "@/components/home/TradingStep/TradingStep";
import WhyChoose from "@/components/home/WhyChoose/WhyChoose";
import LiveData from "@/components/home/LiveData/LiveData";
// import Modal from "@/components/home/Modal/Modal";
// import CompanyStock from "@/components/home/CompanyStock/CompanyStock";

export default function Home() {
  return (
    <main>
      <Banner />
      <TradingStep />
      <InvestmentSolutions />
      <StartTrading />
      {/* <CompanyStock /> */}
      <Services />
      <WhyChoose />
      <LiveData />
      <Subscription />
      <NewsLetter />
      {/* <Modal /> */}
    </main>
  );
}
