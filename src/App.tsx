import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/routes';
import Layout from './containers/Layout';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
