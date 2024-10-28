import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorAluno from "../components/error";
import { useAluno } from "../context/alunos.context";

function Detalhes() {
  let { id } = useParams();
  const { getAluno, aluno } = useAluno();

  useEffect(() => {
    getAluno(id);
  }, [id, getAluno]);

  if (!aluno) {
    return <ErrorAluno />;
  } else {
    return <Form isUpdate />;
  }
}

export default Detalhes;
