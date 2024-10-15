import "./assets/styleGlobal.css";

import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Turma</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João Silva</td>
            <td>15</td>
            <td>8A</td>
            <td>Rua A, 123</td>
            <td>joao@email.com</td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ana Souza</td>
            <td>14</td>
            <td>7B</td>
            <td>Rua B, 456</td>
            <td>ana@email.com</td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Carlos Oliveira</td>
            <td>16</td>
            <td>9A</td>
            <td>Rua C, 789</td>
            <td>carlos@email.com</td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Maria Lima</td>
            <td>15</td>
            <td>8B</td>
            <td>Rua D, 101</td>
            <td>maria@email.com</td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Pedro Mendes</td>
            <td>13</td>
            <td>6A</td>
            <td>Rua E, 202</td>
            <td>pedro@email.com</td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Lucas Martins</td>
            <td>14</td>
            <td>7A</td>
            <td>Rua F, 303</td>
            <td>lucas@email.com</td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default App;

/*
  1 - Nome da função tem que ser capitalizada (primeira maiuscula)
  2 - Sempre deve ter um retorno, exeto componentes usados por outro
  3 - O componente somente consegue ler um elemento
  4 - Passagem de parametro
  4: Propostas de projeto:
    - Header
    - Menu
    - pagina 1: - Conteúdo relacionado ao projeto.
      - Cadastro
      - Pagina de Listagem
      - Possibilidade de edição
      - Exclusão com notificação
    - pagina 2: - Conteúdo relacionado ao projeto.
        - informativo que consuma um api externa para compor
    - Footer

  *OBS: Pode usar o projeto do professor como base, seguindos os seguintes pontos:

  1 - Não pode ser o mesmo tipo de negócio
  2 - Não pode ter as mesmas cores
  3 - Não pode ter o mesmo modelo de dados
    
*/
