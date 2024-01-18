import Banner from "@/components/home/Banner/Banner";
import InvestmentSolutions from "@/components/home/InvestmentSolutions/InvestmentSolutions";
import StartTrading from "@/components/home/StartTrading/StartTrading";
import TradingStep from "@/components/home/TradingStep/TradingStep";
import WhyChoose from "@/components/home/WhyChoose/WhyChoose";


export default function Home() {
  return (
    <main>
        <Banner/>
        <TradingStep/>
        <InvestmentSolutions/>
        <StartTrading/>
        <WhyChoose/>
    </main>
  )
}
