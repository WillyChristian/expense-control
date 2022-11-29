import styled from 'styled-components'

export const SpendContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.alpha.gray};
  border-bottom: 2px solid ${(props) => props.theme.alpha.white};
  width: 50%;
  .spends {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0.5rem;
    p {
      padding: 0.2rem 0;
    }

    .icon {
      font-size: 1.2rem;
      line-height: 1;
    }
  }
`
