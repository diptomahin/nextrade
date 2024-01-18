import Banner from "@/components/home/Banner/Banner";
import InvestmentSolutions from "@/components/home/InvestmentSolutions/InvestmentSolutions";
import StartTrading from "@/components/home/StartTrading/StartTrading";
import TradingStep from "@/components/home/TradingStep/TradingStep";


export default function Home() {
  return (
    <main>
        <Banner/>
        <TradingStep/>
        <InvestmentSolutions/>
        <StartTrading/>
    </main>
  )
}
