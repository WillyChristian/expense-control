import styled from "styled-components";

export const ContentCard = styled.div`
	padding: 1rem;
	width: max-content;
	background-color: ${(props) => props.theme.colors.white};
	margin: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0px 10px 20px 0px #333;

	.card {
		&__header {
			width: 12rem;
			height: 6rem;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			position: relative;

			&-img {
				object-fit: contain;
			}
		}
		&__body {
			width: 12rem;
			padding: 1.4rem 0.8rem;

			&--description {
				font-size: 0.8rem;
				line-height: 1.2;
				font-weight: 700;
				color: #383838;
			}
		}
	}
`;
