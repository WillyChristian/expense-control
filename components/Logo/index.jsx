import React from 'react';
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { LogoArea } from './style';

export default function Logo({content}) {
  return (
    <LogoArea>
      <div className={content}>
        <RiMoneyDollarCircleLine className={`${content}__icon`} />
        <h3 className={`${content}__brand`}>Meu Controle Financeiro</h3>
      </div>
    </LogoArea>
  );
}

