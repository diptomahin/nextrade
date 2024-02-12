"use client"
import ManageCrypto from '@/components/admins_comp/ManageCrypto';
import MarketTable from '@/components/traders_comp/market/MarketTable';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageCoins = () => {
    const [assets, setAssets] = useState([]);
    const [flatCurrency, setFlatCurrency] = useState([]);


    const { data: allCoins = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['allCoins'],
        queryFn: async () => {
            const res = await axios.get('/allCoins.json');
            return res.data
        }
    });

    // console.log(allCoins)
    useEffect(() => {
        if (allCoins.length > 0) {
            setAssets(allCoins.filter(coin => coin.type === "crypto coin"))
            setFlatCurrency(allCoins.filter(coin => coin.type === "flat coin"))
        }
    }, [allCoins])


    const createData = (name, key, price, type, changePrice, highPrice, lowPrice, icon) => ({ name, key, price, type, changePrice, highPrice, lowPrice, icon });


    // console.log(assets)

    useEffect(() => {
        const socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

        socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            if (assets.length > 0) {
                const updatedAssets = assets.map((asset) => {
                    const ticker = data.find((item) => item.s === asset.key);
                    if (ticker) {
                        return createData(
                            asset.name,
                            asset.key,
                            parseFloat(ticker.c).toFixed(3),
                            asset.type,
                            parseFloat(ticker.p).toFixed(3),
                            parseFloat(ticker.h).toFixed(2),
                            parseFloat(ticker.l).toFixed(2),
                            asset.icon,
                        );
                    }
                    return asset;
                });
                setAssets(updatedAssets);
            }
        });
        return () => socket.close();
    }, [assets]);



    const createFlatCurrencyData = (name, key, type, price, icon) => ({ name, key, type, price, icon });

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                if (flatCurrency.length > 0) {
                    const response = await axios.get(
                        'https://api.exchangerate-api.com/v4/latest/USD'
                    );
                    // Access the data property of the response to get the currency rates
                    const data = response.data.rates;
                    const updatedAssets = flatCurrency.map(cur => {
                        const currencyKey = cur.key
                        // console.log(currencyKey)
                        return createFlatCurrencyData(
                            cur.name,
                            cur.key,
                            cur.type,
                            data[currencyKey],
                            cur.icon,
                        );
                    })
                    setFlatCurrency(updatedAssets)
                }
            } catch (error) {
                console.error('Error fetching currency rates:', error);
            }
        };

        fetchCurrencyRates();
    }, [flatCurrency]);
    // console.log(flatCurrency)

    return (
        <div>
            <ManageCrypto assets={assets}></ManageCrypto>
        </div>
    );
};

export default ManageCoins;