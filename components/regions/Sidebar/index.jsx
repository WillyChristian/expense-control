import React, { useContext } from 'react'
import { Input } from '../../Forms/Input/index'
import Select from '../../Forms/Select/index'
import Button from '../../Forms/Button/index'
import CustomDatePicker from '../../Forms/Datepicker/index'
import { Container } from './style'
import { AppContext } from '../../../context/Context'

import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Sidebar() {
  const { sheetData } = useContext(AppContext)

  const initialValues = {
    buyingDate: '',
    cardBank: '',
    deadlineDate: '',
    expense: '',
    method: '',
    price: '',
    times: '1',
    installments: '',
  }
  const formik = useFormik({
    initialValues,
    onSubmit: async (data) => {
      const dataStr = JSON.stringify(data)
      fetch('/api/write-data', {
        method: 'POST',
        body: dataStr,
      })
        .then((resp) => {
          if (resp.status === 200) {
            formik.resetForm(initialValues)
            return alert('Cadastrado com Sucesso')
          }
        })
        .catch((err) => console.log(err)) // TODO: Redirect to the error page
    },
    /**
     * TODO: Finish the form validation
     */
    // validationSchema: Yup.object().shape({
    //   buyingDate: Yup.date().required('Campo Obrigatório'),
    //   cardBank: Yup.string().required(),
    //   deadlineDate: Yup.date().required(),
    //   expense: Yup.string().required(),
    //   method: Yup.string().required(),
    //   price: Yup.number().required(),
    // }),
  })

  return (
    <Container>
      <div className="sidebar">
        <div className="sidebar__header">
          <p>aqui vai o botão de abrir o menu</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <CustomDatePicker
            date={formik.values.buyingDate}
            handleChange={formik.handleChange}
            label="Data da Compra"
            name="buyingDate"
          />
          <Input
            handleChange={formik.handleChange}
            label="Preço"
            name="price"
            placeholder="Separe com ponto: ."
            initValue={formik.values.price}
          />
          <Select
            handleChange={formik.handleChange}
            name="method"
            options={sheetData.method}
            title="Forma de Pagamento"
            value={formik.values.method}
          />

          {formik.values.method === 'credit' && (
            <>
              <Select
                handleChange={formik.handleChange}
                name="cardBank"
                options={sheetData.bank}
                title="Qual cartão"
                value={formik.values.cardBank}
              />
              <CustomDatePicker
                date={formik.values.deadlineDate}
                handleChange={formik.handleChange}
                label="Vencimento da fatura"
                name="deadlineDate"
              />
              <Input
                handleChange={formik.handleChange}
                label="Quantas Vezes"
                name="times"
                placeholder="Valor mínimo é 1"
                initValue={formik.values.times}
              />
            </>
          )}
          <Select
            handleChange={formik.handleChange}
            name="expense"
            options={sheetData.type}
            title="Tipo de Despesa"
            value={formik.values.expense}
          />
          <div className="sidebar__wrapper-buttons">
            <Button formType="submit" title="Enviar" />
            <Button
              formType="button"
              handleClick={formik.resetForm}
              title="Limpar"
            />
          </div>
        </form>
      </div>
    </Container>
  )
}
