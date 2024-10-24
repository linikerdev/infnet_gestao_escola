import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detalhesAlunoApi, editAlunoApi } from "../services/api";
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import ErrorAluno from "../components/error";

function Detalhes() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [aluno, setAluno] = useState(null);

  const setChange = (field, value) =>
    setAluno({
      ...aluno,
      [field]: value,
    });

  const updateAluno = async () => {
    try {
      await editAlunoApi(aluno);
      alert(`Atualizado o aluno ${aluno?.nome} feito com sucesso`);
      setAluno({});
      navigate("/");
    } catch {
      throw new Error("não foi possível cadastrar");
    }
  };

  useEffect(() => {
    (async () => {
      const aluno = await detalhesAlunoApi(id);
      setAluno(aluno.data);
    })();
  }, [id]);

  if (!aluno) {
    return <ErrorAluno />;
  } else {
    return <Form aluno={aluno} change={setChange} submit={updateAluno} />;
  }
}

export default Detalhes;
