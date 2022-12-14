import { useContext } from 'react'

// components
import { Main } from './styles/_index'
import Content from '../../components/regions/Content'
import Sidebar from '../../components/regions/Sidebar/index'

import LoadPage from '../../components/Load/index'
import { AppContext } from '../../context/Context'

function Home() {
  const { sheetData } = useContext(AppContext)
  // if (!sheetData) return <LoadPage />
  // if (sheetData) {
  return (
    <>
      <Main>
        <Sidebar />
        <Content />
      </Main>
    </>
  )
  // }
}
export default Home
