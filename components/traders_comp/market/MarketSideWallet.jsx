import useSecureFetch from '@/hooks/useSecureFetch';
import React from 'react';

const MarketSideWallet = () => {
    const { data: allUsers = [], isPending, isLoading, refetch } = useSecureFetch(
        `/all-users/${user.email}`,
        ["all-users"]
      );
    
      const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);
      console.log(usersRemainingBalance)
    return (
        <div>
            
        </div>
    );
};

export default MarketSideWallet;