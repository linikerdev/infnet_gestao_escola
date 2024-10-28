import { BrowserRouter, Routes, Route } from "react-router-dom";

import Initial from "./pages/index";
import Layout from "./components/layout";
import Detalhes from "./pages/detalhes";
import Cadastro from "./pages/cadastro";
import { ProviderAluno } from "./context/alunos.context";

function Routers() {
  return (
    <BrowserRouter>
      <ProviderAluno>
        <Layout>
          <Routes>
            <Route path="/" Component={Initial} />
            <Route path="/cadastro" Component={Cadastro} />
            <Route path="/detalhes/:id?" Component={Detalhes} />
            <Route path="/teste" Component={Teste} />
          </Routes>
        </Layout>
      </ProviderAluno>
    </BrowserRouter>
  );
}

export default Routers;

// componente fake react
//
const Teste = () => {
  return <div> Aqui é um teste</div>;
};
