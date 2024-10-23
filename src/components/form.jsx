import "../assets/styleGlobal.css";
import { cadastroAlunoApi, editAlunoApi } from "../services/api";

function Form({ act, form, setForm, update }) {
  const setChange = (field, value) =>
    setForm({
      ...form,
      [field]: value,
    });

  const submit = async () => {
    try {
      const action = update ? editAlunoApi : cadastroAlunoApi;

      await action(form);
      alert(
        `${update ? "Atualização" : "Cadastrado"} do usário ${form.nome} feito com sucesso`,
      );
      setForm({});
      act(true);
    } catch {
      throw new Error("não foi possível cadastrar");
    }
  };

  return (
    <div className="cadastro">
      {/* {JSON.stringify(form)} */}
      <div className="field">
        <label>Nome:</label>
        <input
          type="text"
          value={form.nome || ""}
          onChange={(e) => setChange("nome", e.target.value)}
          placeholder="Digite aqui o Nome"
        />
      </div>
      <div className="field">
        <label>Idade:</label>
        <input
          value={form.idade || ""}
          onChange={(e) => setChange("idade", e.target.value)}
          type="text"
          placeholder="Digite aqui a Idade"
        />
      </div>
      <div className="field">
        <label>Turma:</label>
        <input
          value={form.turma || ""}
          onChange={(e) => setChange("turma", e.target.value)}
          type="text"
          placeholder="Digite aqui a Turma"
        />
      </div>
      <div className="field">
        <label>Endereço:</label>
        <input
          value={form.endereco || ""}
          onChange={(e) => setChange("endereco", e.target.value)}
          type="text"
          placeholder="Digite aqui o Endereço"
        />
      </div>
      <div className="field">
        <label>Email:</label>
        <input
          value={form.email || ""}
          onChange={(e) => setChange("email", e.target.value)}
          type="email"
          placeholder="Digite aqui o Email"
        />
      </div>
      <div className="field">
        <button onClick={() => submit()}>Salvar</button>
      </div>
    </div>
  );
}

export default Form;

// <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Nome submetido:", nome);
// }
