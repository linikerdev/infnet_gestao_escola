import "../assets/styleGlobal.css";

function Form({ aluno, change, submit }) {
  return (
    <div className="cadastro">
      {/* {JSON.stringify(form)} */}
      <div className="field">
        <label>Nome:</label>
        <input
          type="text"
          value={aluno.nome || ""}
          onChange={(e) => change("nome", e.target.value)}
          placeholder="Digite aqui o Nome"
        />
      </div>
      <div className="field">
        <label>Idade:</label>
        <input
          value={aluno.idade || ""}
          onChange={(e) => change("idade", e.target.value)}
          type="text"
          placeholder="Digite aqui a Idade"
        />
      </div>
      <div className="field">
        <label>Turma:</label>
        <input
          value={aluno.turma || ""}
          onChange={(e) => change("turma", e.target.value)}
          type="text"
          placeholder="Digite aqui a Turma"
        />
      </div>
      <div className="field">
        <label>Endereço:</label>
        <input
          value={aluno.endereco || ""}
          onChange={(e) => change("endereco", e.target.value)}
          type="text"
          placeholder="Digite aqui o Endereço"
        />
      </div>
      <div className="field">
        <label>Email:</label>
        <input
          value={aluno.email || ""}
          onChange={(e) => change("email", e.target.value)}
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
