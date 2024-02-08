import { Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const MarketHeadLine = ({assets}) => {
    return (
        <Stack mt={4}>
          <Marquee direction='right'>
            {assets.map((asset) => (
              <Stack className="bg-sky-100 rounded-lg h-24" key={asset.name} sx={{ px: 2, py: 1 }} justifyContent="space-between" alignItems="center" marginX={4} gap={3} flexDirection="row">
                <Stack>
                  <Stack flexDirection="row" gap={1} alignItems="center">
                    <Image width={45} height={45} src={asset.icon} alt='coin lgog'></Image>
                    <p className='font-semibold'>{asset.name}</p>
                  </Stack>
                  <Stack flexDirection="row" gap={2}>
                  <p>${asset.price}</p>
                  <p className={` ${asset.changePrice < 0 ? "text-red-700" : "text-green-700"}`}>{asset.changePrice}% {asset.changePrice < 0 ? <TrendingDownIcon />:<TrendingUpIcon />}</p>
                  </Stack>
                </Stack>
                <Stack>
                  <p>Heigh Price: <span className="text-green-700">${asset.heighPrice}</span></p>
                  <p>Low Price: <span className="text-red-700">${asset.lowPrice}</span></p>
                </Stack>
              </Stack>
            ))}
          </Marquee>
        </Stack>
    );
};

export default MarketHeadLine;