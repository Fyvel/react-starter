import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import classes from './navigation.module.scss'

type NavLinkProps = {
	children: React.ReactNode
	href: string
	activeRoute: string
	className: string
	activeOverride?: boolean
	referenceRoute?: string
	ariaLabel?: string
}

export default function NavLink({
	children,
	href,
	activeRoute,
	activeOverride,
	className,
	ariaLabel,
}: NavLinkProps) {
	return (
		<Link to={href}
			aria-label={ariaLabel}
			className={classNames({
				[classes.active_route]: activeOverride ?? href === activeRoute,
				[className]: className != null,
			})}
		>
			{children}
			{/* <HoverShinyEffect color="#001aff" /> */}
		</Link>
	)
}
