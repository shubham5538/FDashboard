import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { DiGoogleCloudPlatform } from 'react-icons/di'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-blue-950 w-60 p-3 flex flex-col text-white">
			<div className="flex items-center gap-2 px-1 py-3">
				<DiGoogleCloudPlatform fontSize={24} className='text-neutral-200 text-lg' />
				<span className="text-neutral-200 text-lg">OpenShop</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}