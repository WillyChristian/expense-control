import styled from 'styled-components'

export const LogoArea = styled.div`
  & > .header {
    align-items: center;
    display: flex;
    flex-direction: column;
    .header__brand {
      visibility: hidden;
    }
  }

  .header {
    &__icon {
      color: ${(props) => props.theme.colors.white};
      font-size: 2rem;
      line-height: 1.2;
    }
    &__brand {
      color: ${(props) => props.theme.colors.white};
    }
  }
`
