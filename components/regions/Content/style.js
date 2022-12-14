import styled from 'styled-components'

export const MainContent = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;

  & .accordion {
    height: 300px;

    &.colapsed {
      height: 200px;
    }
  }

  .home__section {
    &--spends {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &--balance {
      padding: 1rem;
      .title {
        font-family: sans-serif;
        font-size: 1rem;
        line-height: 0.8rem;
        font-weight: 700;
        padding: 0.2rem 0;
        text-align: center;
      }
      .cards {
        height: 100%;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 12rem);
        gap: 3rem;
        padding: 1rem;
      }
    }
  }
`
