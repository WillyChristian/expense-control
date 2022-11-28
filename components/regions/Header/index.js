import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { HeaderContainer, LogoArea } from './style'

export default function Header() {
  return (
    <HeaderContainer>
      <LogoArea>
        <RiMoneyDollarCircleLine className="header__icon" />
        <h3 className="header__brand">Meu Controle Financeiro</h3>
      </LogoArea>
    </HeaderContainer>
  )
}
