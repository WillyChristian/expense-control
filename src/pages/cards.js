import React, { useContext } from 'react'
import Card from '../../components/Card'
import { CardWrapper } from './styles/_cards'
import { AppContext } from '../../context/Context'

export default function Cards() {
  const { sheetData } = useContext(AppContext)

  return (
    <>
      <CardWrapper>
        {sheetData.bank?.map((i) => (
          <Card data={i} />
        ))}
      </CardWrapper>
    </>
  )
}
