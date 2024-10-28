/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-alunos";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAluno } from "../context/alunos.context";

function Table() {
  const navigate = useNavigate();
  const { alunos, deleteFn } = useAluno();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.alunos.map((column, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {column.toUpperCase()}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Editar
            </th>
            <th scope="col" className="px-6 py-3">
              Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((item, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.nome}</td>
              <td className="px-6 py-4">{item.idade}</td>
              <td className="px-6 py-4">{item.turma}</td>
              <td className="px-6 py-4">{item.endereco}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className=" py-4 text-center justify-center">
                <button
                  onClick={() => navigate(`/detalhes/${item.id}`)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaEdit />
                </button>
              </td>
              <td className="flex py-4 text-center justify-center">
                <button
                  onClick={() => deleteFn(item.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <table>
    //   <thead>
    //     <tr>
    //       {columns.alunos.map((column, i) => (
    //         <th key={i}>{column.toUpperCase()}</th>
    //       ))}
    //       <th>Editar</th>
    //       <th>Excluir</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {alunos.map((item, i) => (
    //       <tr key={i}>
    //         <td>{item.id}</td>
    //         <td>{item.nome}</td>
    //         <td>{item.idade}</td>
    //         <td>{item.turma}</td>
    //         <td>{item.endereco}</td>
    //         <td>{item.email}</td>
    //         <td>
    //           <button
    //             onClick={() => navigate(`/detalhes/${item.id}`)}
    //             classNameName="btn btn-editar"
    //           >
    //             <FaEdit />
    //           </button>
    //         </td>
    //         <td>
    //           <button
    //             onClick={() => deleteFn(item.id)}
    //             classNameName="btn btn-excluir"
    //           >
    //             <FaTrash />
    //           </button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}

export default Table;
