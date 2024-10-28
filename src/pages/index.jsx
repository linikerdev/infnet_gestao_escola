import "../assets/styleGlobal.css";
import Table from "../components/table";
import { useEffect } from "react";
import { useAluno } from "../context/alunos.context";

function Initial() {
  const { getAlunos, showList } = useAluno();
  //ciclo de vida do componente
  useEffect(() => {
    getAlunos();
  }, [showList, getAlunos]);

  return <Table />;
}

export default Initial;
