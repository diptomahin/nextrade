'use client'
import { BarChart } from "recharts";

const AdminDashboardChart = () => {
     return (
          <div className=" text-white p-4 rounded  bg-gradient-to-bl  from-darkOne to-darkTwo">
               <h2>Asset Chart</h2>
               <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    
          </div>
     );
};

export default AdminDashboardChart;