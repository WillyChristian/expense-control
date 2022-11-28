import React from 'react'
import { ButtonContainer } from './style'

const Button = ({ title, handleClick, formType }) => {
  if (!handleClick) {
    return <ButtonContainer type={formType}>{title}</ButtonContainer>
  }
  if (handleClick) {
    return (
      <ButtonContainer type={formType} onClick={handleClick}>
        {title}
      </ButtonContainer>
    )
  }
}

export default Button
