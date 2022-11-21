import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from './styles/global';
import dark from './styles/themes/dark';

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<ThemeProvider theme={dark}>
				<Component {...pageProps} />
				<Global />
			</ThemeProvider>
		</React.StrictMode>
	);
}

export default MyApp;
