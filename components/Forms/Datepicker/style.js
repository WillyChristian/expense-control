import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  width: 100%;

  .sidebar__datepicker {
    &-label {
      font-family: sans-serif;
      font-size: 1rem;
      font-weight: 700;
      line-height: 0.8rem;
      padding: 0.2rem 0;
    }
    &-item {
      border-color: ${(props) => props.theme.alpha.gray};
      border-radius: 0.5rem;
      padding: 0.5rem;
      width: 100%;
    }
  }
`
