import { useNavigate } from "react-router-dom";
import {
  cadastroAlunoApi,
  deleteAlunosApi,
  detalhesAlunoApi,
  editAlunoApi,
  getAlunosApi,
} from "../../../services/api";
import { setAlunos, setDetalhes } from "./reducer";
import Swal from "sweetalert2";

export const getAllAlunos = () => async (dispatch) => {
  try {
    const result = await getAlunosApi();
    dispatch(setAlunos(result));
  } catch (error) {
    console.log("error", error);
  }
};

export const getDetalhesAluno = (id) => async (dispatch) => {
  try {
    const result = await detalhesAlunoApi(id);
    dispatch(setDetalhes(result.data));
  } catch (error) {
    console.log("error", error);
  }
};

export const editForm = (field, value) => async (dispatch, getState) => {
  const detalhe = getState().aluno.detalhe;

  dispatch(
    setDetalhes({
      ...detalhe,
      [field]: value,
    }),
  );
};

export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const aluno = getState().aluno.detalhe;
      const action = editForm ? editAlunoApi : cadastroAlunoApi;
      await action(aluno);
      dispatch(getAllAlunos());

      Swal.fire({
        title: "Sucesso !",
        text: `Aluno ${editForm ? "Editado" : "Cadastrado"} com sucesso.`,
        icon: "success",
      });

      return Promise.resolve();
    } catch {
      throw new Error(
        `Não foi possível ${editForm ? "atualizar" : "cadastrar"}`,
      );
    }
  };

export const deleteAluno = (aluno) => async (dispatch) => {
  Swal.fire({
    title: `Deseja excluir o aluno ${aluno.nome}`,
    icon: "info",
    html: `
      Após a exclusão essa tarefa não poderá ser desfeita.
      `,
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonText: `Cancelar`,
    cancelButtonColor: "#ccc",
    confirmButtonText: `Confirmar`,
    confirmButtonColor: "green",
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Sucesso !",
        text: `Aluno ${aluno.nome} excluído com sucesso.`,
        icon: "success",
      });

      await deleteAlunosApi(aluno.id);
      dispatch(getAllAlunos());
    } else if (result.isDenied) {
      Swal.fire("Error ao tentar excluir", "", "error");
    }
  });
};
