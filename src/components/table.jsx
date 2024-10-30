 

import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-alunos";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAluno } from "../store/slices/aluno/actions";

function Table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { alunos } = useSelector((state) => state.aluno);

  const removeAluno = (id) => dispatch(deleteAluno(id));

  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            {columns.alunos.map((column, i) => (
              <th key={i} scope="col" className="px-2 py-3">
                {column}
              </th>
            ))}
            <th className="px-1 py-3">Editar</th>
            <th className="px-1 py-3">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((item, i) => (
            <tr
              key={i}
              className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-2 py-4">{item.id}</td>
              <td className="px-2 py-4">{item.nome}</td>
              <td className="px-2 py-4">{item.idade}</td>
              <td className="px-2 py-4">{item.turma}</td>
              <td className="px-2 py-4">{item.endereco}</td>
              <td className="px-2 py-4">{item.email}</td>
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
                  onClick={() => removeAluno(item.id)}
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
  );
}

export default Table;
