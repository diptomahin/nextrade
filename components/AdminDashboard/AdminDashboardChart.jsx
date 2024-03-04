'use client'
import { Tooltip } from "@mui/material";
import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts";

const AdminDashboardChart = () => {
     return (
          <div className=" text-white p-4 rounded  bg-gradient-to-bl  from-darkOne to-darkTwo">
               <h2>Asset Chart</h2>
               <BarChart
        width={600}
        height={290}
        data={[
          { name: "Q1", value: 35 },
          { name: "Q2", value: 44 },
          { name: "Q3", value: 24 },
          { name: "Q4", value: 34 },
        ]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      >
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#40a0ff" />
      </BarChart>
    
          </div>
     );
};

export default AdminDashboardChart;