import React from "react"
import classes from "./DarkModeToggle.module.scss"

export default function DarkModeToggle() {
	return (
		<div className={classes.toggle}>
			<span
				id="dark-mode-toggle"
				title="Dark mode toggle"
				role="img"
				aria-label="Dark mode">🌙</span>
		</div>
	)
}