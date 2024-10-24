/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-alunos";
import { FaEdit, FaTrash } from "react-icons/fa";

function Table({ alunos, deleteFn, editForm }) {
  const navigate = useNavigate();
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
              <button
                onClick={() => navigate(`/detalhes/${item.id}`)}
                className="btn btn-editar"
              >
                <FaEdit />
              </button>
            </td>
            <td>
              <button
                onClick={() => deleteFn(item.id)}
                className="btn btn-excluir"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
