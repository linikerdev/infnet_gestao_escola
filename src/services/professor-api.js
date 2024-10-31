import http from "../config/http";
/**
 * Carrega todos os alunos do banco.
 */
async function getAll() {
  const alunos = await http.get("/alunos");
  return alunos.data;
}
/**
 * Faz a remoção do arquivo na api.
 * @param {id} id - identificador do aluno na api
 */
async function remove(id) {
  // poderiam usar o axios
  try {
    await http.delete(`/alunos/${id}`);
  } catch {
    throw new Error("## Não foi possível deletar");
  }
}
/**
 * Faz a remoção do arquivo na api.
 * @param {aluno} aluno - objeto do aluno (...deve ser definido na interface)
 */

/**
 * Faz o cadastro na api.
 * @param {aluno} aluno - objeto do aluno (...deve ser definido na interface)
 */
async function create(aluno) {
  try {
    await http.post(`/alunos/`, aluno);
  } catch {
    throw new Error("## Não foi possível cadastrar");
  }
}
async function update(form) {
  // poderiam usar o axios
  try {
    await http.patch(`/alunos/${form.id}`, form);
  } catch {
    throw new Error("## Não foi possível atualizar");
  }
}
/**
 * Para obter os dados do aluno
 * @param {id} id - string
 */
async function getById(id) {
  // poderiam usar o axios
  try {
    return await http.get(`/alunos/${id}`);
  } catch {
    throw new Error("não foi possível atualizar");
  }
}

export default {
  getAll,
  remove,
  create,
  update,
  getById,
};
