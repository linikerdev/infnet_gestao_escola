import http from "../config/http";

const pathIdentify = "/alunos";

/**
 * Carrega todos os alunos do banco.
 */
async function getAll() {
  const alunos = await http.get(pathIdentify);
  return alunos.data;

  // exemplo
  // return new Promise((res) => {
  //   return setTimeout(async () => {
  //     const alunos = await http.get(pathIdentify);
  //     res(alunos.data);
  //   }, 5000);
  // });
}
/**
 * Faz a remoção do arquivo na api.
 * @param {id} id - identificador do aluno na api
 */
async function remove(id) {
  // poderiam usar o axios
  try {
    await http.delete(`${pathIdentify}/${id}`);
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
    await http.post(pathIdentify, aluno);
  } catch {
    throw new Error("## Não foi possível cadastrar");
  }
}
async function update(aluno) {
  // poderiam usar o axios
  try {
    await http.patch(`${pathIdentify}/${aluno.id}`, aluno);
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
    return await http.get(`${pathIdentify}/${id}`);
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
