import { createContext, useState, useEffect } from 'react'
import useSWR from 'swr'
import {
  TbBuildingStore,
  TbDogBowl,
  TbCurrencyReal,
  TbShoppingCart,
  TbMedicalCross,
  TbBeach,
  TbFilePower,
  TbAlertCircle,
  TbTruck,
  TbFilePhone,
  TbCast,
} from 'react-icons/tb'


export const AppContext = createContext()

const spendsMock = [
  { valor: '40,00', onde: 'carro', data: '	2022-11-10' },
  { valor: '460,00', onde: 'imprevisto', data: '	2022-11-11' },
  { valor: '44,00', onde: 'animais', data: '	2022-11-13' },
  { valor: '34,00', onde: 'padaria', data: '	2022-11-15' },
]

/**
 * Get an icon and set it's class 
 * @param {string} icon 
 * @param {string} attr 
 * @returns the icon component
 */
function getIcon(icon, attr) {
  const icons = {
    padaria: <TbBuildingStore className={attr} />,
    animais: <TbDogBowl className={attr} />,
    supermercado: <TbShoppingCart className={attr} />,
    farmacia: <TbMedicalCross className={attr} />,
    carro: <TbTruck className={attr} />,
    lazer: <TbBeach className={attr} />,
    luz: <TbFilePower className={attr} />,
    imprevisto: <TbAlertCircle className={attr} />,
    telefonia: <TbFilePhone className={attr} />,
    strem: <TbCast className={attr} />,
  }
  return icons[icon];
}

export default function AppDataContext({ children }) {
  const [sheetData, setSheetData] = useState({})
  // TODO: Replace this sentence for a Next SSR. 
  const { data, error } = useSWR('/api/get-data', (...args) =>
    fetch(...args).then((res) => res.json()),
  )
  // Update the state when data changes
  useEffect(() => setSheetData(data), [data]);

  const value = {
    sheetData,
    spendsMock,
    getIcon
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
