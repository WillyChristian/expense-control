import React from 'react'
import { BankBalance, CardBalance, InvestBalance } from './style'
import { SlWallet } from 'react-icons/sl'
import { TbCurrencyReal } from 'react-icons/tb'
import { BsCreditCard2Back } from 'react-icons/bs'

export default function Balance() {
  return (
    <>
      <BankBalance>
        <div className="icon__container">
          <SlWallet className="icon" />
        </div>
        <div className="currency__container">
          <TbCurrencyReal className="currency__icon" />
          <p className="currency__value">2.341,60</p>
        </div>
        <small>Saldo em conta</small>
      </BankBalance>
      <BankBalance>
        <div className="icon__container">
          <BsCreditCard2Back className="icon" />
        </div>
        <div className="currency__container">
          <TbCurrencyReal className="currency__icon" />
          <p className="currency__value">741,60</p>
        </div>
        <small>Gasto Cartão de Crédito</small>
      </BankBalance>
      <BankBalance>
        <small>Investimentos (em breve...)</small>
      </BankBalance>
    </>
  )
}
