import { useContext } from "react";

// components
import { Body, Main } from "./styles/_index";
import Content from "../../components/regions/Content";
import Sidebar from "../../components/regions/Sidebar";
import Header from "../../components/regions/Header";

import LoadPage from "../../components/Load";
import { AppContext } from "../../context/Context";

function Home() {
	const { sheetData } = useContext(AppContext);
	if (!sheetData) return <LoadPage />;
	if (sheetData) {
		return (
			<>
				<Header />
				<Main>
					<Sidebar />
					<Content />
				</Main>
			</>
		);
	}
}
export default Home;
