import React, { useContext } from "react"
import { useLocation } from "react-router-dom"
import { Button } from "@material-ui/core"
import { URI } from "../../router/routes"
import { AuthContext } from "../../contexts/AuthContext"
import DarkModeToggle from "../DarkModeToggle"
import NavLink from "./NavLink"
import styles from "./navigation.module.scss"

export default function Navigation() {
	const auth = useContext(AuthContext)
	const route = useLocation()
	const activeRoute = route.pathname

	return (
		<header>
			<nav>
				<div className={styles.logo}>
					<NavLink
						activeRoute={activeRoute}
						href={URI.home}
						className={styles.img}
						ariaLabel="Home page">
						<img src="logo.svg" alt="Ze logo (ideally an svg!)" />
					</NavLink>
				</div>
				<NavLink
					activeRoute={activeRoute}
					href={URI.home}
					className={styles.img}
					ariaLabel="Home page">
					Home <span role="img" aria-label="house">🏡</span>
				</NavLink>
				<NavLink
					activeRoute={activeRoute}
					href={URI.about}
					className={''}
					ariaLabel="Home page">
					About <span role="img" aria-label="info">ℹ</span>
				</NavLink>
				<NavLink
					activeRoute={activeRoute}
					href={URI.profile}
					className={''}
					ariaLabel="Home page">
					Profile <span role="img" aria-label="waving hand">👋</span>
				</NavLink>
				{!auth?.user
					? <Button onClick={() => { auth.signIn('blah') }}>
						Sign in <span role="img" aria-label="key">🔑</span>
					</Button>
					: <Button onClick={() => { auth.signOut() }}>
						Sign out <span role="img" aria-label="lock">🔒</span>
					</Button>}
				<DarkModeToggle />
			</nav>
		</header>
	)
}