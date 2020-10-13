import React from "react"
import { Link } from "react-router-dom"
import { URI } from "../router/routes"

export default function Navigation() {
	return (
		<nav>
			<Link to={URI.home}>Home <span role="img" aria-label="house">🏡</span></Link> | 
			<Link to={URI.about}>About <span role="img" aria-label="house">ℹ</span></Link>
		</nav>
	)
}