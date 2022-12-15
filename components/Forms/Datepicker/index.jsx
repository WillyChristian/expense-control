import React from 'react'
import { Wrapper } from './style'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function CustomDatePicker({ name, date, handleChange, label }) {
  return (
    <Wrapper>
      <label className="sidebar__datepicker-label" htmlFor={name}>
        {label}
      </label>
      <DatePicker
        dateFormat="dd/MM/yy"
        className="sidebar__datepicker-item"
        selected={date}
        onChange={(date) => handleChange({ target: { name, value: date } })}
      />
    </Wrapper>
  )
}
