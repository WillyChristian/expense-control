import React, { useContext } from 'react'
import { SpendContainer } from './style'
import { RiStore3Line } from 'react-icons/ri'
import { TbCurrencyReal } from 'react-icons/tb'
import { AppContext } from '../../../../context/Context'

export default function Spends() {
  const { spendsMock } = useContext(AppContext)

  return (
    <>
      <p>Últimos gastos</p>
      {spendsMock.map((spend) => {
        return (
          <SpendContainer>
            <div className="spends local">
              <RiStore3Line className="icon" />
              <p>{spend.onde}</p>
            </div>

            <div className="spends price">
              <TbCurrencyReal className="icon" />
              <p>{spend.valor}</p>
            </div>

            <p className="spends date">{spend.data}</p>
          </SpendContainer>
        )
      })}
    </>
  )
}
