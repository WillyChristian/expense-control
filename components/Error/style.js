import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  .container {
    &__description {
      font-weight: 100;
      height: 5rem;
      line-height: 1.1;
      margin: 1rem;
      max-width: 30rem;
      padding: 1rem 1.2rem;
    }
  }
`
