import "../assets/styleGlobal.css";
import { useAluno } from "../context/alunos.context";

function Form({ isUpdate = false}) {
  const { aluno, setChange, saveForm } = useAluno();

  if (!aluno) {
    return <div>vazio</div>;
  }

  return (
    <div className="cadastro">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              onChange={(e) => setChange("nome", e.target.value)}
              placeholder="Digite aqui o Nome"
              value={aluno.nome || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="idade"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Idade
            </label>
            <input
              type="text"
              id="idade"
              onChange={(e) => setChange("idade", e.target.value)}
              placeholder="Digite sua idade"
              value={aluno.idade || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Turma
            </label>
            <input
              type="turma"
              id="turma"
              onChange={(e) => setChange("turma", e.target.value)}
              placeholder="Digite sua turma"
              value={aluno.turma || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setChange("email", e.target.value)}
              placeholder="Digite seu email"
              value={aluno.email || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Endereço:
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={aluno.endereco || ""}
            onChange={(e) => setChange("endereco", e.target.value)}
            placeholder="Digite aqui o Endereço"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={() => saveForm(isUpdate)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default Form;

// <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Nome submetido:", nome);
// }
