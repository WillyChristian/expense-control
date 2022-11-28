import { GoogleSpreadsheet } from 'google-spreadsheet'
const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body)
    // Shorter date format (DD/MM/YYYY)
    const buyingDate = body.buyingDate
      .slice(0, 10)
      .split('-')
      .reverse()
      .join('/')
    const deadlineDate = body.deadlineDate
      .slice(0, 10)
      .split('-')
      .reverse()
      .join('/')

    // Fix currency separators to do the math
    let installments = (body.price.replace(',', '.') / body.times)
      .toFixed(2)
      .toString()
      .replace('.', ',') // Get the currency format back

    const newRow = {
      ...body,
      buyingDate,
      deadlineDate,
      installments,
    }
    await doc.useServiceAccountAuth({
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.SECRET_KEY,
    })
    await doc.loadInfo()
    const daily = await doc.sheetsByTitle.Daily
    await daily.addRow({
      Method: newRow.method,
      Card: newRow.cardBank || '',
      Deadline: newRow.deadlineDate || '',
      Value: newRow.price,
      Type: newRow.expense,
      Date: newRow.buyingDate,
      Times: newRow.times,
      Installments: newRow.installments,
    })
    res.status(200).send('Cadastrado com sucesso!')
  } catch (error) {
    res.status(500).send({ error: error })
  }
}
