import styled from 'styled-components'

export const MainContent = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  width: 100%;

  & .accordion {
    height: 300px;

    &.colapsed {
      height: 200px;
    }
  }

  .home__section {
    &--spends {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &--balance {
      padding: 1rem;
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
        gap: 3rem;
        grid-template-columns: repeat(3, 12rem);
        height: 100%;
        justify-content: center;
        padding: 1rem;
      }
    }
  }
`
