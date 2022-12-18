import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.alpha.gray};
  position: absolute;
  left: 100%;
  .sidebar {
    padding: 1rem 1rem 1rem 2rem;
    &__header {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      padding: 0.2rem 0;
      width: 100%;
    }
    &__wrapper-buttons {
      align-items: center;
      background-color: ${(props) => props.theme.colors.white};
      display: flex;
      justify-content: space-around;
      padding: 1.2rem 0;
      width: 100%;
    }
  }
`
