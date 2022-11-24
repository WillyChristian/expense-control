import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.container {
		&__description {
			max-width: 30rem;
			height: 5rem;
			line-height: 1.1;
			font-weight: 100;
			margin: 1rem;
			padding: 1rem 1.2rem;
		}
	}
`;
