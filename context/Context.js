import { createContext, useState, useEffect } from 'react'
import useSWR from 'swr'
export const AppContext = createContext()

const spendsMock = [

  { valor: '40,00', onde: 'carro', data: '	2022-11-10' },
  { valor: '460,00', onde: 'imprevisto', data: '	2022-11-11' },
  { valor: '44,00', onde: 'animais', data: '	2022-11-13' },
  { valor: '34,00', onde: 'padaria', data: '	2022-11-15' },
]
export default function AppDataContext({ children }) {
  const [sheetData, setSheetData] = useState({})
  const { data, error } = useSWR('/api/get-data', (...args) =>
    fetch(...args).then((res) => res.json()),
  )
  // Update the state when data changes
  // useEffect(() => setSheetData(data), [data]); durante desenvolvimento de telas

  const value = {
    sheetData,
    spendsMock,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
