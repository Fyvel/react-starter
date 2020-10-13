import React from 'react';
import AppContextProvider from './contexts/AppContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/routes';
import Layout from './containers/Layout';
import AuthContextProvider from './contexts/AuthContext';

function App() {
	const clients = {
		someClient: {},
		anotherClient: {},
	}

	return (
		<AppContextProvider clients={clients}>
			<AuthContextProvider>
				<BrowserRouter>
					<Layout>
						<Routes />
					</Layout>
				</BrowserRouter>
			</AuthContextProvider>
		</AppContextProvider>
	);
}

export default App;
