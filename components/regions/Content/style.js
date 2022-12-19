import styled from 'styled-components'

export const MainContent = styled.div`
  background-color: ${(props) => props.theme.alpha.white};
  display: flex;
  flex-direction: column;

  .section {
    &__balance {
      border-radius: 1rem;
      border: 1px solid ${(props) => props.theme.alpha.primary};
      padding: 1rem;
      margin-bottom: 1rem;
      .title {
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 0.8rem;
        padding: 0.2rem 0;
        text-align: center;
      }
      .cards {
        display: grid;
        gap: 1rem;
        grid-template-rows: repeat(3, 1fr);
        height: 100%;
        justify-content: center;
        padding: 1rem;

        @media (min-width: 768px) {
          grid-template-columns: repeat(3, 12rem);
          grid-template-rows: unset;
        }
      }
    }
    &__spends {
      align-items: center;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      padding: 1rem ;
    }
  }
`
