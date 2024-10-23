import http from "../config/http";

export async function getAlunosApi() {
  // poderiam usar o axios
  const alunos = await http.get("/alunos");
  return alunos.data;
}

export async function deleteAlunosApi(id) {
  // poderiam usar o axios
  try {
    await http.delete(`/alunos/${id}`);
  } catch {
    throw new Error("não foi possível deletar");
  }
}

export async function cadastroAlunoApi(form) {
  // poderiam usar o axios
  try {
    await http.post(`/alunos/`, form);
  } catch {
    throw new Error("não foi possível cadastrar");
  }
}
export async function editAlunoApi(form) {
  // poderiam usar o axios
  try {
    await http.patch(`/alunos/${form.id}`, form);
  } catch {
    throw new Error("não foi possível atualizar");
  }
}
