import React from 'react';

const CurrencySell = () => {

    
    // profit and loss calculator
    const calculateDifference = (currentPrice, buyingPrice, portion) => {
        const profitLoss =
            (currentPrice - buyingPrice) * (parseFloat(portion.slice(0, -1)) / 100);
        return profitLoss;
    };
    return (
        <div>

        </div>
    );
};

export default CurrencySell;