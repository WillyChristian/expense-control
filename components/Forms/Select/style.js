import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 1rem;

  .sidebar__select {
    &-label {
      font-family: sans-serif;
      font-size: 1rem;
      font-weight: 700;
      line-height: 0.8rem;
      padding: 0.2rem 0;
    }
    &-item {
      background-color: #fff;
      background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
      border-color: ${(props) => props.theme.alpha.gray};
      border-radius: 0.25em;
      border-radius: 0.5rem;
      color: #333;
      cursor: pointer;
      font-size: 0.85rem;
      line-height: 1.1;
      padding: 0.5rem;
      width: 100%;

      &-option {
        color: #333;
        font-size: 0.85rem;
        &:hover {
          background-color: ${(props) => props.theme.alpha.gray} !important;
        }
      }
    }
  }
`
