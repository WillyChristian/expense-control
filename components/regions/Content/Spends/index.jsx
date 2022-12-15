import React, { useContext } from 'react'
import { SpendContainer } from './style'
import { AppContext } from '../../../../context/Context'
import { TbCurrencyReal } from 'react-icons/tb'

export default function Spends() {
  const { spendsMock, getIcon } = useContext(AppContext)
  return (
    <>
      <p>Últimos gastos</p>
      {spendsMock.map((spend) => {
        return (
          <SpendContainer>
            <div className="spends local">
              {getIcon(spend.onde, 'icon')}
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
