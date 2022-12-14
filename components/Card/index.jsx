import React, { useContext } from 'react'
import Image from 'next/image'
import { ContentCard } from './style'
import { AppContext } from '../../context/Context'

export default function Card({ data }) {
  const card = (label) => {
    return {
      ItauClick: '/itaucardClick.jpg',
      nubank: '/nubankCard.jpg',
      inter: '/intercard.jpg',
      pickPay: '/picpaycard.jpg',
    }[label]
  }

  return (
    <ContentCard>
      <div className="card__header">
        <div className="card__header-img">
          <Image
            className="card__header-img-logo"
            src={card(data.value)}
            alt="picpay"
            fill
          />
        </div>
      </div>
      <div className="card__body">
        <div className="card__body--description">Próximo Vencimento:</div>
        <div className="card__body--description">Total gasto:</div>
        <div className="card__body--description">Limite disponível:</div>
        {/* <div className="card__body--cta">Botões</div> */}
      </div>
    </ContentCard>
  )
}
