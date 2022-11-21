import styled from 'styled-components';

export const Loading = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #333;
	color: ${(props) => props.theme.colors.primary};

	.loading {
		&__title {
			margin-bottom: 3rem;
		}
		&__spinner {
			width: 50px;
			height: 50px;
			position: relative;
			margin: 0 auto;

			&:before,
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				border: 1px dotted #fff;
				opacity: 0.6;
				position: absolute;
				top: 0;
				left: 0;
				animation: sk-bounce 2s linear infinite;
			}
			&:after {
				animation-delay: -1s;
			}
		}
	}
	@keyframes sk-bounce {
		0% {
			transform: scale(0);
		}
		20% {
			transform: scale(1);
		}
		40% {
			transform: scale(1.5);
		}
		60% {
			transform: scale(2);
			opacity: 0.5;
		}
		80% {
			transform: scale(2.5);
			opacity: 0.25;
		}
		100% {
			transform: scale(3);
			opacity: 0;
		}
	}
`;
