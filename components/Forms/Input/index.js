import React from 'react'
import * as Currency from 'react-currency-format'
import { Container } from './style'

export function Input({
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

/**
 * TODO: Add a field to hold currency format.
 * react-currenct-format works well but has issues with name and ID,
 * which causes problemas with formik
 */
export function CurrencyInput({ initValue, inputName, label, handleChange }) {
  const SimpleInput = () => {
    return <input name={inputName} className="sidebar__input-item" />
  }
  return (
    <Container>
      <label className="sidebar__input-label" htmlFor={name}>
        {label}
      </label>
      <Currency
        customInput={SimpleInput}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        value={initValue}
        onValueChange={(values) =>
          handleChange({ target: { value: { values } } })
        }
      />
    </Container>
  )
}
