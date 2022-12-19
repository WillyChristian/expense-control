import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 4rem;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  .content {
    //mobiler
    align-items: flex-end;
    display: flex;
    //tablet
    @media (min-width: 768px) {
      max-width: 664px;
    }
    //notebook - telas médias
    @media (min-width: 998px) {
      max-width: 992px;
    }
    //ultra-wide
    @media (min-width: 1400px) {
      max-width: 1200px;
    }
  }
`
