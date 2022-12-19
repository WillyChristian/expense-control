import { useEffect } from 'react'
import { MainContent } from './style'
import Link from 'next/link'
import $ from 'jquery'

// components
import Spends from './Spends'
import Balance from './Balance'

export default function Content() {
  return (
    <>
      <MainContent>
        <section className="section__balance">
          <h4 className="title">Balanço da Semana</h4>
          <div className="cards">
            <Balance />
          </div>
        </section>
        <section className="section__spends">
          <Spends />
        </section>
      </MainContent>
    </>
  )
}
