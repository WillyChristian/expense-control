import React from 'react'
import { SpendContainer } from './style'
import { RiStore3Line } from 'react-icons/ri'
import { TbCurrencyReal } from 'react-icons/tb'

export default function Spends() {
  return (
    <SpendContainer>
      <div className="spends local">
        <RiStore3Line className="icon" />
        <p>Padaria</p>
      </div>

      <div className="spends price">
        <TbCurrencyReal className="icon" />
        <p>49,90</p>
      </div>

      <p className="spends date">25/10</p>
    </SpendContainer>
  )
}
