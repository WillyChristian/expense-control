import styled from 'styled-components'
import { NormalHomeCard } from '../../../Card/style'

export const BankBalance = styled(NormalHomeCard)`
  justify-content: space-around;
  padding: 2rem 1rem;
  .icon__wallet {
    font-size: 2rem;
  }
  .currency {
    &__container {
      display: flex;
      align-items: center;
    }
    &__icon {
      font-size: 1.1rem;
      margin: 0 0.2rem 0.2rem 0;
    }
  }
`
export const CardBalance = styled(NormalHomeCard)`
  justify-content: space-around;
  padding: 2rem 1rem;
  .icon__ccard {
    font-size: 2rem;
  }
  .currency {
    &__container {
      display: flex;
      align-items: center;
    }
    &__icon {
      font-size: 1.1rem;
      margin: 0 0.2rem 0.2rem 0;
    }
  }
`
export const InvestBalance = styled(NormalHomeCard)`
  justify-content: space-around;
  padding: 2rem 1rem;

`
