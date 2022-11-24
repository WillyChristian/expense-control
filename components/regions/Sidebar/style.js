import styled from 'styled-components';

export const Container = styled.div`
	padding: 1.3rem;
	background-color: ${(props) => props.theme.colors.white};
	border-right: 1px solid ${(props) => props.theme.colors.alpha.gray};

	.sidebar {
		&__header {
			height: 5rem;
			width: 100%;
			padding: 1.2rem 0;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			&--icon {
				font-size: 1.5rem;
				line-height: 1.2;
				color: #008000;
				margin: 0 0.5rem 0.2rem 0;
			}
		}
		&__wrapper-buttons {
			background-color: #080800;
			width: 100%;
			padding: 1.2rem 0;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	}
`;
