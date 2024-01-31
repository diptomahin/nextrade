"use client"

import DashButton from '@/components/library/buttons/DashButton';
import useAuth from '@/hooks/useAuth';
import usePublicAPI from '@/hooks/usePublicAPI';
import useSecureFetch from '@/hooks/useSecureFetch';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CoinDetails = ({ params }) => {
    // console.log(params)
    const { user, loading } = useAuth();

    const {
        data: allUsers = [],
        isPending,
        isLoading,
        refetch,
    } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

    const [tickerData, setTickerData] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection for BTC/USD ticker
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${params.CoinDetails.toLowerCase()}@ticker`);

    // Event listener for incoming messages
    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      setTickerData(data);
    });

    // Cleanup function to close the WebSocket on component unmount
    return () => {
      console.log('Closing WebSocket connection.');
      socket.close();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>{params.CoinDetails} Details</h2>
      {tickerData ? (
        <div>
          <p>Last Price: {tickerData.c}</p>
          <p>24h High: {tickerData.h}</p>
          <p>24h Low: {tickerData.l}</p>
          <p>24h Change: {tickerData.P}%</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoinDetails;