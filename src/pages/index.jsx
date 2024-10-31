import Table from "../components/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllAlunos } from "../store/slices/aluno/actions";

function Initial() {
  const dispatch = useDispatch();

  //ciclo de vida do componente
  useEffect(() => {
    dispatch(getAllAlunos());
  }, []);

  return <Table />;
}

export default Initial;
