import { useContext } from "react";
import { MainContent, CardWrapper } from "./style";
import Card from "../../Card";
import { AppContext } from "../../../context/Context";

export default function Content() {
	const { sheetData } = useContext(AppContext);
	return (
		<MainContent>
			<CardWrapper>
				{sheetData?.bank.map((i) => (
					<Card data={i} />
				))}
			</CardWrapper>
		</MainContent>
	);
}
