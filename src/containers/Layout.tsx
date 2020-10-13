import React, { ReactNode } from "react";
import Navigation from '../components/Navigation'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	)
}