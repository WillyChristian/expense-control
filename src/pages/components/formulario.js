import React, { useState } from 'react'

export default function Formulario() {
  const formStyle = style()
  const [data, setData] = useState({
    marca: '',
    modelo: '',
    peca: '',
    preço: '',
  })

  const Atualizar = (event) => {
    const value = event.target.value
    const key = event.target.name
    setData((old) => ({
      ...old,
      [key]: value,
    }))
  }
  const Cadastrar = async () => {
    try {
      const body = JSON.stringify(data)
      await fetch('/api/cadastro_pecas', {
        method: 'POST',
        body,
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <form>
      <fieldset>
        <legend>Serviço Executado</legend>
        <input
          id="marca"
          placeholder="Marca do Aparelho"
          onChange={Atualizar}
          name="marca"
        />
        <input
          placeholder="MODELO"
          id="modelo"
          onChange={Atualizar}
          name="modelo"
        />
        <input placeholder="Peça" id="peça" onChange={Atualizar} name="peca" />
        <input
          placeholder="Preço"
          id="preço"
          onChange={Atualizar}
          name="preço"
        />
        <button onClick={Cadastrar}>Cadastrar</button>
      </fieldset>
    </form>
  )
}
