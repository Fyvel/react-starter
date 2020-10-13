import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const URI = {
	home:'/home',
	about: '/about',
}

export default function Routes(){
	return (
		<Switch>
			<Route exact path={URI.home}>
				<>Home page</>
			</Route>
			<Route exact path={URI.about}>
				<>About page</>
			</Route>
			<Redirect exact path="/" to={URI.home} />
		</Switch>
	)
}