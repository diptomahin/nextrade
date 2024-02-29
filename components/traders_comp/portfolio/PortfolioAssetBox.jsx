import * as MuiIcons from "@mui/icons-material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./Portfolio.css"
import { Pagination, Skeleton } from '@mui/material';
   
const PortfolioAssetBox = ({cryptoData,loading,pending,calculateDifference,setCurrentPage}) => {
     if (loading || pending) {
          return (
              <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-6'>
                  <Skeleton sx={{ height: 190 , borderRadius:"40px" }} animation="wave" variant="rectangular" />
                  <Skeleton sx={{ height: 190 , borderRadius:"40px" }} animation="wave" variant="rectangular" />
                  <Skeleton sx={{ height: 190 , borderRadius:"40px" }} animation="wave" variant="rectangular" />
                  <Skeleton sx={{ height: 190 , borderRadius:"40px" }} animation="wave" variant="rectangular" />
                  <Skeleton sx={{ height: 190 , borderRadius:"40px" }} animation="wave" variant="rectangular" />
                  <Skeleton sx={{ height: 190 , borderRadius:"40px" }} animation="wave" variant="rectangular" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="my-6 flex justify-center flex-wrap">
        <Pagination
          color="primary"
          sx={{
            "& .MuiPaginationItem-page": { color: "white", marginY: "5px" },
            "& .MuiPaginationItem-icon": {
              color: "white", // Change arrow color
            },
          }}
          count={cryptoData.length}
          onChange={(event, v) => setCurrentPage(parseInt(v) - 1)}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
};

export default PortfolioAssetBox;
