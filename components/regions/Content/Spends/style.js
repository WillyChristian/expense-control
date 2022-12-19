import styled from 'styled-components'

export const SpendContainer = styled.div`
  background-color: ${(props) => props.theme.alpha.gray};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 0.2rem;
  width: 70%;

  .spends {
    padding: .2rem .2rem .2rem 2rem;
    p {
      padding-left: 1rem;
    }
    &.local {
      align-items: center;
      display: flex;
      grid-column: 1 / 2;
    }
    &.price {
      align-items: center;
      display: flex;
      grid-column: 2 / 3;
    }
    .icon {
      font-size: 1.2rem;
      grid-column: 3 / 4;
      line-height: 1;
    }
  }
`
