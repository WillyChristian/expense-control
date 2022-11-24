import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	height: 100vh;
	width: 100vw;
	> *:nth-child(1) {
		flex: 1 1 30%;
	}
	> *:nth-child(2) {
		flex: 1 1 70%;
	}
`;
