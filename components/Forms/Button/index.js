import React from 'react'
import { ButtonContainer } from './style'

const Button = ({ title, handleClick, formType }) => {
  return (
    <ButtonContainer type={formType} onClick={handleClick}>
      {title}
    </ButtonContainer>
  )
}

export default Button
