import "../assets/styleGlobal.css";
import Layout from "../components/layout";
import Table from "../components/table";
import { useEffect, useState } from "react";
import { deleteAlunosApi, getAlunosApi } from "../services/api";
import Form from "../components/form";
import Topo from "../components/topo_act";

function Initial() {
  const [alunos, setAlunos] = useState([]);
  const [showList, setShowList] = useState(true);
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);

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

  const cadastro = (value) => {
    setShowList(value);
    setUpdate(false);
  };
  const editForm = (value) => {
    console.log(value);
    setForm(value);
    setShowList(!setShowList);
    setUpdate(true);

    // forma diferente de tratar a promise
  };

  //ciclo de vida do componente
  useEffect(() => {
    getAlunos();
  }, [showList]);

  return (
    <Layout>
      {/* Renderização condicionada (básico) */}
      <Topo show={showList} act={cadastro} />
      {showList ? (
        <Table alunos={alunos} deleteFn={deleteAlunos} editForm={editForm} />
      ) : (
        <Form act={setShowList} form={form} setForm={setForm} update={update} />
      )}
    </Layout>
  );
}

export default Initial;
