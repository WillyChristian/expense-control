import styled from 'styled-components'

export const Loading = styled.div`
  align-items: center;
  background: #333;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  .loading {
    &__title {
      margin-bottom: 3rem;
    }
    &__spinner {
      height: 50px;
      margin: 0 auto;
      position: relative;
      width: 50px;

      &:before,
      &:after {
        animation: sk-bounce 2s linear infinite;
        border-radius: 50%;
        border: 1px dotted #fff;
        content: '';
        display: block;
        height: 100%;
        left: 0;
        opacity: 0.6;
        position: absolute;
        top: 0;
        width: 100%;
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
`
