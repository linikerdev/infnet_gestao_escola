import { useState } from "react";
import Form from "../components/form";
import { cadastroAlunoApi } from "../services/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const setChange = (field, value) =>
    setForm({
      ...form,
      [field]: value,
    });

  const cadastraAluno = async () => {
    try {
      await cadastroAlunoApi(form);
      alert(`Cadastrado do usário ${form.nome} feito com sucesso`);
      setForm({});
      navigate("/");
    } catch {
      throw new Error("não foi possível cadastrar");
    }
  };

  return (
    <>
      {JSON.stringify(form)}
      <Form aluno={form} change={setChange} submit={cadastraAluno} />
    </>
  );
}

export default Cadastro;
