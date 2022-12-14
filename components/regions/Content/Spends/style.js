import styled from 'styled-components'

export const SpendContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.alpha.gray};
  width: 50%;
  margin-bottom: 0.2rem;
  .spends {
    padding: .2rem .2rem .2rem 2rem;
    p {
      padding-left: 1rem;
    }
    &.local {
      grid-column: 1 / 2;
      display: flex;
      align-items: center;
    }
    &.price {
      grid-column: 2 / 3;
      display: flex;
      align-items: center;
    }
    .icon {
      grid-column: 3 / 4;
      font-size: 1.2rem;
      line-height: 1;
    }
  }
`
