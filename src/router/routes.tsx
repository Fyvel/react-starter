import React, { ReactNode, useContext } from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const URI = {
	base: '/',
	home: '/home',
	about: '/about',
	profile: '/profile',
}

function PrivateRoute({ children, ...rest }: { children: ReactNode } & RouteProps) {
	const { user } = useContext(AuthContext)

	return (
		<Route
			{...rest}
			render={() => user
				? (children)
				: (<>Unauthorised</>)}
		/>)
}

export default function Routes() {
	const { user } = useContext(AuthContext)

	return (
		<Switch>
			<Route exact path={URI.home}>
				<h1>Welcome {user?.name}</h1>
			</Route>
			<Route exact path={URI.about}>
				<h1>About {user?.name}</h1>
			</Route>
			<PrivateRoute path={URI.profile}>
				<h1>Profile {user?.name}</h1>
			</PrivateRoute>
			<Redirect exact path={URI.base} to={URI.home} />
		</Switch>
	)
}