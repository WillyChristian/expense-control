import React from 'react'
import { Container } from './style'

export default function Input({
  initValue,
  name,
  placeholder,
  icon,
  label,
  handleChange,
  isDisabled,
}) {
  return (
    <Container>
      <label className="sidebar__input-label" htmlFor={name}>
        {label}
      </label>
      <div className="sidebar__input-wrapper">
        <div className="sidebar__input-icon">{icon && icon}</div>
        <input
          className="sidebar__input-item"
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={initValue || ''}
          disabled={isDisabled || false}
        />
      </div>
    </Container>
  )
}
