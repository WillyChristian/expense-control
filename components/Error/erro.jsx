import React from 'react'
import { Container } from './style'
export default function ErrorPage({ err }) {
  return (
    <Container>
      <h1 className="container__title">404 | Não encontrado </h1>
      <h4 className="container__description">
        Não foi possível carregar a página. Contate o desenvolvedor para maiores
        informações
      </h4>
      <small>{err}</small>
    </Container>
  )
}
