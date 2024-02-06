"use client"
import useAuth from '@/hooks/useAuth';
import useSecureFetch from '@/hooks/useSecureFetch';
import React from 'react';

const Watchlist = () => {
    const { user, loading } = useAuth();
    // console.log(user)
    const { data: watchlistData=[], isPending, isLoading, refetch } = useSecureFetch(
        `/watchlist?email=${user.email}`,
        ["watchlist",user.email]
    );
    console.log(watchlistData)
    return (
        <div>
            <h1 className='text-2xl font-bold'>This page under Construction </h1>
            <h1 className='text-2xl font-bold'>Total watchlist count: {watchlistData.length} </h1>
        </div>
    );
};

export default Watchlist;