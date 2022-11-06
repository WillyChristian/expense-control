import React from 'react'
import Row from './row'

export default function Tabela({ data }) {
  return (
    <table>
      <tr>
        <td>Marca do Aparelho</td>
        <td>Modelo do Aparelho</td>
        <td>Peça / Serviço executado</td>
        <td>Valor final (R$)</td>
      </tr>
      {/* {data?.map((element, indice) => {
        return <tr key={Math.random() * 100 * indice}></tr>
      })} */}
      <Row />
    </table>
  )
}
/*

<td
  
  className={tableStyle.headAndBody}
>
  {element.marca}
</td>
<td
  key={Math.random() * 100 * indice}
  className={tableStyle.headAndBody}
>
  {element.modelo}
</td>
<td
  key={Math.random() * 100 * indice}
  className={tableStyle.headAndBody}
>
  {element.peça}
</td>
<td
  key={Math.random() * 100 * indice}
  className={tableStyle.headAndBody}
>
  {element.preço}
</td>

*/
