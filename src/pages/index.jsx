import { useContext } from 'react'

// components
import { Main } from './styles/_index'
import Content from '../../components/regions/Content'
import Header from '../../components/regions/Header'
import LoadPage from '../../components/Load/index'
import { AppContext } from '../../context/Context'
import Navbar from '../../components/regions/Navbar'
import Aside from '../../components/regions/Content/Aside'

function Home() {
  const { sheetData } = useContext(AppContext)
  // if (!sheetData) return <LoadPage />
  // if (sheetData) {
  return (
    <>
      <Header />
      <Main>
        <Navbar />
        <Content />
        <Aside/>
      </Main>
    </>
  )
  // }
}
export default Home
