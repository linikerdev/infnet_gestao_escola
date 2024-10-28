import { Link } from "react-router-dom";

function ErrorAluno() {
  return (
    <div className="error">
      <h2>Aluno não encontrado.</h2>
      <h5>Não foi possível encontrar o aluno buscado</h5>
      <br />
      <br />
      <Link to="/">Volte para pagina Inicial</Link>
    </div>
  );
}

export default ErrorAluno;
