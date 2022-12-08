import React from 'react';
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { LogoArea } from './style';

export default function Logo() {
  return (
    <LogoArea>
      <RiMoneyDollarCircleLine className="header__icon" />
      <h3 className="header__brand">Meu Controle Financeiro</h3>
    </LogoArea>
  );
}

