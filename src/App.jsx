import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import { useEffect, useState } from "react";
import { deleteAlunosApi, getAlunosApi } from "./services/api";

function App() {
  const [alunos, setAlunos] = useState([]);


  // deletar os alunos
  const deleteAlunos = async (id) => {
    try {
      await deleteAlunosApi(id);
      await getAlunos();
    } catch {
      alert("aconteceu um erro");
    }
  };

  // buscar os alunos
  const getAlunos = async () => {
    const data = await getAlunosApi();
    setAlunos(data);
  };

  //ciclo de vida do componente
  useEffect(() => {
    getAlunos();
  }, []);

  return (
    <Layout>
      <Table alunos={alunos} deleteFn={deleteAlunos} />
    </Layout>
  );
}

export default App;
