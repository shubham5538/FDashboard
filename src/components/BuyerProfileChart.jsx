import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const CustomerData = [
  {
    name: "China",
    value: 215,
  },
  {
    name: "United States",
    value: 716,
  },
  {
    name: "India",
    value: 1002,
  }
];

function BuyerProfileChart() {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Customers</strong>
      <span className="flex flex-col text-sm text-gray-400">
        Customers that buy products
      </span>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={CustomerData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={(entry) => entry.name}
            >
              {CustomerData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BuyerProfileChart;
