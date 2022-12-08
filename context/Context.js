import { createContext, useState, useEffect } from 'react'
import useSWR from 'swr'
export const AppContext = createContext()

export default function AppDataContext({ children }) {
  const [sheetData, setSheetData] = useState({})
  const { data, error } = useSWR('/api/get-data', (...args) =>
    fetch(...args).then((res) => res.json()),
  )
  // Update the state when data changes
  // useEffect(() => setSheetData(data), [data]); durante desenvolvimento de telas

  const value = {
    sheetData,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
