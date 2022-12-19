import styled from 'styled-components'

export const NavContainer = styled.nav`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 hsl(0,0%,50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0;
  margin: 1rem 0;
  padding: 1rem 0;
  position: absolute;
  width: 5rem;

  ul {
    width: 100%;
    li {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0.5rem 0;
      position: relative;

      &::after {
        background-color: ${(props) => props.theme.colors.white};
        border-radius: 0.2rem;
        content: '';
        height: 1rem;
        position: absolute;
        right: 0;
        top: 25%;
        transform-origin: center;
        transform: scaleY(0.8);
        transition: transform 300ms ease;
        visibility: hidden;
        width: 0.25rem;
      }
      &:hover {
        &::after {
          transform: scaleY(1.8);
          visibility: visible;
        }
      }
    }
  }
  .icon__container {
    height: 100%;
    aspect-ratio: 1;
    .icon {
      color: ${props => props.theme.colors.pure_white};
      font-size: 2rem;
      line-height: 1.2;
      pointer-events: none;
      z-index: -1;
    }
  }
`
