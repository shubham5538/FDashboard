import React from 'react'
import DashboardStatesGrid from './DashboardStatesGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecordOrders from './RecordOrders'

function Dashboard  ()  {
  return (
     <div className='flex flex-col gap-4'>
<DashboardStatesGrid/>
<div className='flex flex-row gap-4 w-full'>
<TransactionChart/>
<BuyerProfileChart/>
</div>
<div className='flex flex-row gap-4 w-full'>
  <RecordOrders/>
</div>
  </div>
  )
}

export default Dashboard