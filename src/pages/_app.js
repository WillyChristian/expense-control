import React from "react";
import { ThemeProvider } from "styled-components";
import Global from "./styles/global";
import dark from "./styles/themes/dark";
import AppDataContext from "../../context/Context";

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<AppDataContext>
				<ThemeProvider theme={dark}>
					<Component {...pageProps} />
					<Global />
				</ThemeProvider>
			</AppDataContext>
		</React.StrictMode>
	);
}

export default MyApp;
