/* eslint-disable react/prop-types */
function Layout({ children }) {
  return (
    <>
      <div className="container">
        <header>
          <h1>Cadastro de Alunos</h1>
        </header>

        <nav>
          <a href="#">Home</a>
          <a href="#">Alunos</a>
          <a href="#">Professores</a>
          <a href="#">Turmas</a>
          <a href="#">Sair</a>
        </nav>
        <main>{children}</main>
        <footer>
          &copy; 2024 Cadastro de Alunos. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}

export default Layout;
