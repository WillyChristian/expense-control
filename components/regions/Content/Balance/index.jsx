import React from 'react'
import { BankBalance, CardBalance } from './style'

export default function Balance() {
  return (
    <>
      <BankBalance>Bank Balance</BankBalance>
      <CardBalance> Last week card Balance</CardBalance>
      <CardBalance>Investimentos</CardBalance>
    </>
  )
}
