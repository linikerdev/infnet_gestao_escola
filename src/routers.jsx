import { BrowserRouter, Routes, Route } from "react-router-dom";

import Initial from "./pages/index";
import Layout from "./components/layout";
import Detalhes from "./pages/detalhes";
import Cadastro from "./pages/cadastro";

function Routers() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Initial} />
          <Route path="/cadastro" Component={Cadastro} />
          <Route path="/detalhes/:id?" Component={Detalhes} />
          <Route path="/teste" Component={Teste} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routers;

// componente fake react
//
const Teste = () => {
  return <div> Aqui é um teste</div>;
};
