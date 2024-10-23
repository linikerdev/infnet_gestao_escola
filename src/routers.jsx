import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import Initial from "./pages/index";
import Layout from "./components/layout";

const Teste = () => {
  const { id } = useParams(); // Pega o parâmetro 'id' da URL
  return <div>isso é um teste {id}</div>;
};

const Routers = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/teste/:id" element={<Teste />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Routers;
