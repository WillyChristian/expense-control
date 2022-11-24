import styled from "styled-components";

export const MainContent = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const CardWrapper = styled.div`
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
`;
