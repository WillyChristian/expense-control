import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.alpha.gray};
  .sidebar {
    padding: 1rem 1rem 1rem 2rem;
    &__header {
      width: 100%;
      padding: 0.2rem 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    &__wrapper-buttons {
      background-color: ${(props) => props.theme.colors.white};
      width: 100%;
      padding: 1.2rem 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`
