import { useEffect } from 'react'
import { MainContent } from './style'
import Link from 'next/link'
import $ from 'jquery'

// components
import Spends from './Spends'
import Balance from './Balance'

export default function Content() {
  useEffect(function () {
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
      <section className="home__section--balance accordion">
        <h4 className="title">Balanço da Semana</h4>
        <div className="cards">
          <Balance />
        </div>
      </section>
      <section className="home__section--spends accordion colapsed">
        <Spends />
        <div className="home-section--spends-link">
          <Link href="/spends">Ver mais</Link>
        </div>
      </section>
    </MainContent>
  )
}
