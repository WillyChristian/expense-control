import React from 'react'
import { Loading } from './style'

const LoadPage = () => {
  return (
    <Loading>
      <h1 className="loading__title">Carregando...</h1>
      <div className="loading__spinner"></div>
    </Loading>
  )
}
export default LoadPage
