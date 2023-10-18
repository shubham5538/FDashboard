import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
	{
		name: 'Jan',
		Income: 10000
	},
	{
		name: 'Feb',
		Income: 3500
	},
	{
		name: 'Mar',
		Income: 5500
	},
	{
		name: 'Apr',
		Income: 4600
	},
	{
		name: 'May',
		Income: 4800
	},
	{
		name: 'Jun',
		Income: 2500
	},
	{
		name: 'July',
		Income: 4300
	},
	{
		name: 'Aug',
		Income: 15000
	},
	{
		name: 'Sep',
		Income: 9500
	},
	{
		name: 'Oct',
		Income: 7500
	},
	{
		name: 'Nov',
		Income: 8000
	},
	{
		name: 'Dec',
		Income: 8500
	}
]


function TransactionChart  ()  {
  return  <div className='h-[22rem] bg-white p-4  rounded-sm border  border-gray-200 flex flex-col flex-1'>
    <strong className='text-gray-900 font-medium '> Overview</strong>
    <span className='flex flex-col flex-1 text-sm text-gray-400'>Monthly Earning</span>
    <div className='m-full mt-3 flex-1 text-xs'>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500}
        height={300}
        data={data}
        margin={{
            top:20,
            right:10,
            left:-10,
            bottom:0
        }}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="Income" fill="#0ea5e9"/>

        </BarChart>
    </ResponsiveContainer>
    </div>
  </div>
  
}

export default TransactionChart