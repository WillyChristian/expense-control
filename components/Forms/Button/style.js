import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.2;
  padding: 0.4rem 0.8rem;
`
