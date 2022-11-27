import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
`
