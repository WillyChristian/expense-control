import React, { useContext } from 'react'
import { SpendContainer } from './style'
import { AppContext } from '../../../../context/Context'
import { TbCurrencyReal } from 'react-icons/tb'

export default function Spends() {
  const { spendsMock, getIcon } = useContext(AppContext)
  return (
    <>
      <p>Últimas compras</p>
      {spendsMock.map(({onde, valor, data}, index) => {
        return (
          <SpendContainer key={index}>
            <div className="spends local">
              {getIcon(onde, 'icon')}
              <p>{onde}</p>
            </div>
            <div className="spends price">
              <TbCurrencyReal className="icon" />
              <p>{valor}</p>
            </div>
            <p className="spends date">{data}</p>
          </SpendContainer>
        )
      })}
    </>
  )
}
