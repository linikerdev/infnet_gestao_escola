import AlunoApi from "../../../services/aluno-api";
import { setAlunos, setDetalhes, setLoading } from "./reducer";
import Swal from "sweetalert2";

export const getAllAlunos = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await AlunoApi.getAll();
    dispatch(setAlunos(result));
  } catch (error) {
    console.log("error", error);
  }
  dispatch(setLoading(false));
};
export const getDetalhesAluno = (id) => async (dispatch) => {
  try {
    const result = await AlunoApi.getById(id);
    dispatch(setDetalhes(result.data));
  } catch (error) {
    console.log("error", error);
  }
};
export const editForm = (field, value) => async (dispatch, getState) => {
  const aluno = getState().aluno.detalhe;

  dispatch(
    setDetalhes({
      ...aluno,
      [field]: value,
    }),
  );
};
export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const aluno = getState().aluno.detalhe;
      const action = editForm ? AlunoApi.update : AlunoApi.create;
      await action(aluno);
      dispatch(getAllAlunos());

      Swal.fire({
        title: "Sucesso !",
        text: `O aluno ${editForm ? "editado" : "cadastrado"} com sucesso.`,
        icon: "success",
      });

      return Promise.resolve();
    } catch {
      Swal.fire({
        title: "OPS !",
        text: `Aconteceu um erro ao cadastrar o aluno`,
        icon: "error",
      });
      throw new Error(
        `Não foi possível ${editForm ? "atualizar" : "cadastrar"}`,
      );
    }
  };

export const deleteAluno = (aluno) => async (dispatch) => {
  Swal.fire({
    title: `Deseja excluir o aluno ${aluno.nome}`,
    text: "Após a exclusão essa tarefa não poderá ser desfeita.",
    icon: "info",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#cccc",
    confirmButtonText: "Confirmar Exclusão",
    confirmButtonColor: "green",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await AlunoApi.remove(aluno.id);
        Swal.fire({
          title: "Sucesso !",
          text: `Aluno ${aluno.nome} excluído com sucesso`,
          icon: "success",
        });
        dispatch(getAllAlunos()); // carrega novamente a lista;
      } catch (error) {
        // Existe 2 possibilidades de tratamento de error
        // 1 - Retornar diretamente da API (caso incomun)
        // 2 - Fazer o tratamento diretamento no frontend (comum)

        console.log(error.message);
        Swal.fire({
          title: "Ops !!!",
          text: error.message || `Aconteceu um erro ao tentar deletar`,
          icon: "error",
        });
      }
    }
  });
};
