import { useEffect } from 'react'
import { MainContent } from './style'
import Link from 'next/link'
import $ from 'jquery'

// components
import Spends from './Spends'

export default function Content() {
  useEffect(function() {
    $('.accordion').each(function () {
      $(this).on('click', function () {
        if ($(this).hasClass('colapsed')) {
          $(this).removeClass('colapsed')
          $(this)
            .siblings()
            .each(function () {
              $(this).addClass('colapsed')
            })
        }
      })
    })
  })

  return (
    <MainContent>
      <section className="home-section--spends accordion">
        <Spends />
        <div className="home-section--spends-link">
          <Link href="/spends">Ver mais</Link>
        </div>
      </section>
      <section className="home__section--cards accordion colapsed">
        Seção 2 vai ter um resumo das compras a crédito por cartão. Link para a
        página dos cartões
        <Link href="/cards" className="link">
          Página de cartões
        </Link>
      </section>
      <section className="home__section--idk accordion colapsed">
        Seção 3 Vou pensar em algumas médias
      </section>
    </MainContent>
  )
}
