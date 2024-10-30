import { useNavigate } from "react-router-dom";
import {
  cadastroAlunoApi,
  deleteAlunosApi,
  detalhesAlunoApi,
  editAlunoApi,
  getAlunosApi,
} from "../../../services/api";
import { setAlunos, setDetalhes } from "./reducer";

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
    })
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
      return Promise.resolve();
    } catch {
      throw new Error(
        `Não foi possível ${editForm ? "atualizar" : "cadastrar"}`
      );
    }
  };
export const deleteAluno = (id) =>
  async (dispatch) => {
    try {
      await deleteAlunosApi(id);
      dispatch(getAllAlunos());
    } catch {
      alert("aconteceu um erro");
    }

  };
