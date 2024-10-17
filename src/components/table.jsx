/* eslint-disable react/prop-types */

import { columns } from "../config/columns-alunos";


function Table({ alunos, deleteFn }) {
  

  return (
    <table>
      <thead>
        <tr>
          {columns.alunos.map((column, i) => (
            <th key={i}>{column.toUpperCase()}</th>
          ))}
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.idade}</td>
            <td>{item.turma}</td>
            <td>{item.endereco}</td>
            <td>{item.email}</td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <button
                onClick={() => deleteFn(item.id)}
                className="btn btn-excluir"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
