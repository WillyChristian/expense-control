import styled from 'styled-components';

export const LogoArea = styled.div`
  align-items: center;
  display: flex;
  &.header{
    flex-direction: column;
    .header__brand {
      visibility: hidden;
    }
  }

  .header {
    &__icon {
      color: #008000;
      font-size: 2rem;
      line-height: 1.2;
      margin: 0 0.5rem 0.2rem 0;
    }
    &__brand {
      color: ${(props) => props.theme.colors.white};
    }
  }
`