import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 1rem;

  .sidebar__select {
    &-label {
      font-family: sans-serif;
      font-size: 1rem;
      line-height: 0.8rem;
      font-weight: 700;
      padding: 0.2rem 0;
    }
    &-item {
      width: 100%;
      border-radius: 0.25em;
      font-size: 0.85rem;
      cursor: pointer;
      line-height: 1.1;
      background-color: #fff;
      background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
      padding: 0.5rem;
      border-color: ${(props) => props.theme.alpha.gray};
      border-radius: 0.5rem;
      color: #333;

      &-option {
        font-size: 0.85rem;
        color: #333;
        &:hover {
          background-color: ${(props) => props.theme.alpha.gray} !important;
        }
      }
    }
  }
`
