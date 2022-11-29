import styled from 'styled-components'

export const MainContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .accordion {
    height: 300px;

    &.colapsed {
      height: 150px;
    }
  }

  .home-section {
    &--spends {
      border: 1px dashed purple;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    &--cards {
      border: 1px solid red;
    }
    &--idk {
      border: 1px solid green;
    }
  }
`
