import React from 'react'

import { GoogleSpreadsheet } from 'google-spreadsheet'
const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

const toOriginal = value =>{
    const buff = Buffer.from(value, 'base64')
    return buff.toString('ascii')
}

export default async (req,res) =>{
    
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.EMAIL,
            private_key: toOriginal(process.env.SECRET_KEY)
        })        
        await doc.loadInfo()
        const folha = doc.sheetsByIndex[0]
        const row = JSON.parse(req.body)
        await folha.addRow({
            Marca: row.marca,
            Modelo: row.modelo,
            Peça: row.peca,
            Preço: row.preço
        });
        res.status(200).send('Cadastrado com Sucesso')
    } catch (error) {
        res.status(500).send(console.log(error))
    }
}

