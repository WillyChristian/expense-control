import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`
