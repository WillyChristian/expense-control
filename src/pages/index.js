import React from 'react'
import useSWR from 'swr'

// components
import Tabela from './components/tabela'
import Formulario from '../pages/components/formulario'
import Erro from './components/erro'
import LoadPage from './components/load_page'

function Home() {
  const { data, error } = useSWR('/api/tabela_pecas')
  if (error) return <Erro />
  // if (!data) return <LoadPage />
  if (data) {
    return (
      <>
        <div>
          <p>Aqui tava o Logo</p>
        </div>
        <div>
          <Formulario />
          <Tabela data={data} />
        </div>
      </>
    )
  }
}
export default Home
