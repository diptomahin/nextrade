"use client"
import { useState } from "react";


const Portfolio = () => {
    const [currentBTCPrice, setCurrentBTCPrice] = useState(0);
    const [currentETHPrice, setCurrentETHPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0)


    // for bitcoin
    const bws = new WebSocket ("wss://stream.binance.com:9443/ws/btcusdt@trade")

    bws.onmessage = e => {
        const data = JSON.parse(e.data);
        setCurrentBTCPrice(parseFloat(data.p));

    }

    // for ethereum
    const ews = new WebSocket ("wss://stream.binance.com:9443/ws/etheur@trade")

    ews.onmessage = e => {
        const data = JSON.parse(e.data);
        setCurrentETHPrice(parseFloat(data.p));

    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>This is portfolio page</h1>

            <h1 className='text-5xl font-bold'>ETH = {currentETHPrice.toFixed(2)}</h1>
            <h1 className='text-5xl font-bold'>BTC = {currentBTCPrice.toFixed(2)}</h1>
        </div>
    );
};

export default Portfolio;