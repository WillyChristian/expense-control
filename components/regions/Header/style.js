import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`
export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  .header {
    &__icon {
      font-size: 1.5rem;
      line-height: 1.2;
      color: #008000;
      margin: 0 0.5rem 0.2rem 0;
    }
    &__brand {
      color: ${(props) => props.theme.colors.white};
    }
  }
`
