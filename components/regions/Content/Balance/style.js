import styled from 'styled-components'
import { NormalHomeCard } from '../../../Card/style'

export const BankBalance = styled(NormalHomeCard)`
  justify-content: space-around;
  padding: 2rem 1rem;
  .icon {
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
    &__container {
      align-items: center;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      display: flex;
      padding: 0.5rem;
    }
  }
  .currency {
    &__container {
      align-items: center;
      display: flex;
    }
    &__icon {
      font-size: 1.1rem;
      margin: 0 0.2rem 0.2rem 0;
    }
  }
`