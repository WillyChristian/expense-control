import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

const toOriginal = (value) => {
  const buff = Buffer.from(value, 'base64')
  return buff.toString('ascii')
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.EMAIL,
      private_key: toOriginal(process.env.SECRET_KEY),
    })

    await doc.loadInfo()
    // const folha = doc.sheetsByIndex[0]
    // const linha = await folha.getRows()

    // const services = linha.map((colun) => ({
    //   marca: colun.Marca,
    //   modelo: colun.Modelo,
    //   peça: colun.Peça,
    //   preço: colun.Preço,
    // }))

    res.status(200).send(JSON.stringify(services))
  } catch (error) {
    res.status(500).send(`${error.message}`)
  }
}
