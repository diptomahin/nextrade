'use client'
import React from 'react';
import { Tooltip, ResponsiveContainer, Bar, BarChart, XAxis, YAxis } from 'recharts';

const AdminDashboardChart = () => {
  return (
    <div className="text-black dark:text-white shadow bg-white dark:bg-tertiary p-4 w-full ">
      <h2 className='font-semibold'>Asset Chart</h2>
      <ResponsiveContainer width="100%" height={290}>
        <BarChart data={[
          { name: 'Q1', value: 35 },
          { name: 'Q2', value: 44 },
          { name: 'Q3', value: 24 },
          { name: 'Q4', value: 34 },
        ]}>
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#40a0ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminDashboardChart;
