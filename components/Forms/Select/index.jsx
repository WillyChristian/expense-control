import React from 'react'
import { Container } from './style'

export default function Select({ name, handleChange, title, options, value }) {
  return (
    <Container>
      <label className="sidebar__select-label" htmlFor={name}>
        {title}
      </label>
      <select
        className="sidebar__select-item"
        name={name}
        onChange={handleChange}
        value={value}
      >
        <option className="sidebar__select-item--option" value="empty">
          Selecione
        </option>
        {options?.map((option, index) => {
          return (
            <option
              className="sidebar__select-item--option"
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          )
        })}
      </select>
    </Container>
  )
}
