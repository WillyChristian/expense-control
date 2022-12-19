import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  height: 90vh;
  width: 98vw;
  justify-content: center;

  & > div {
    //mobile
    max-width: 320px;

    //tablet
    @media (min-width: 768px){
      max-width: 664px;
    }
    //notebook - telas médias
    @media (min-width: 998px){
      max-width: 892px;
    }
    //ultra-wide
    @media (min-width: 1400px){
      max-width: 1200px;
    }
  }
`
