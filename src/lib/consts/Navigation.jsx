import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,

} from 'react-icons/hi'
import {MdLiveHelp} from "react-icons/md"
import {LuBadgePercent} from "react-icons/lu"
import {TfiMoney} from 'react-icons/tfi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
    {
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'income',
		label: 'Income',
		path: '/income',
		icon: <TfiMoney />
	},
	
	{
		key: 'promote',
		label: 'Promote',
		path: '/promote',
		icon: <LuBadgePercent />
	},
	{
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <MdLiveHelp />
	}
]

