import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import { URI } from "../router/routes"
import { AuthContext } from "../contexts/AuthContext"

export default function Navigation() {
	const auth = useContext(AuthContext)

	return (
		<nav>
			<Link to={URI.home}>Home <span role="img" aria-label="house">🏡</span></Link>
			<Link to={URI.about}>About <span role="img" aria-label="info">ℹ</span></Link>
			<Link to={URI.profile}>Profile <span role="img" aria-label="waving hand">👋</span></Link>
			<Button onClick={() => { auth.signIn('blah') }}>
				Sign in <span role="img" aria-label="key">🔑</span>
			</Button>
			<Button onClick={() => { auth.signOut() }}>
				Sign out <span role="img" aria-label="lock">🔒</span>
			</Button>
		</nav>
	)
}