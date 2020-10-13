import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react'

type User = any
type AuthContextDefinition = {
	user: User,
	signIn: (url: string) => Promise<void>,
	signOut: () => void,
	error?: Error,
}
const initialState: AuthContextDefinition = {
	user: undefined,
	signIn: async (url: string) => { },
	signOut: () => { },
	error: undefined,
}
export const AuthContext = createContext<AuthContextDefinition>(initialState)

export default function AppContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState(initialState.user)
	const [error, setError] = useState(initialState.error)

	const auth = useMemo(() => {
		const signIn = async (url: string) => {
			setUser({ name: 'Sangoku' })
		}

		const signOut = () => {
			setUser(undefined)
			setError(undefined)
		}

		return {
			user,
			signIn,
			signOut,
			error,
		}
	}, [error, user])

	return (
		<AuthContext.Provider value={auth}>
			{children}
		</AuthContext.Provider>
	)
}