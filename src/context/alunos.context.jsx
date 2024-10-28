import { createContext, useCallback, useContext, useState } from "react";
import {
  cadastroAlunoApi,
  deleteAlunosApi,
  detalhesAlunoApi,
  getAlunosApi,
} from "../services/api";
import { useNavigate } from "react-router-dom";

export const AlunoContext = createContext({});

export const ProviderAluno = ({ children }) => {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({});
  const [form, setForm] = useState({});

  const getAlunos = async () => {
    const data = await getAlunosApi();
    setAlunos(data);
  };
  const deleteAlunos = async (id) => {
    await deleteAlunosApi(id);
    await getAlunos();
  };
  const getAluno = useCallback(async (id) => {
    const aluno = await detalhesAlunoApi(id);
    setAluno(aluno.data);
  }, []);

  const cadastroAluno = async (aluno) => {
    try {
     await cadastroAlunoApi(aluno);
      navigate("/");
    } catch {
      console.log("apresentou ewrro");
    }
  };

  const setChange = (field, value) =>
    setAluno({
      ...aluno,
      [field]: value,
    });

  const saveForm = (isUpdate) => {
    isUpdate ? cadastroAluno() : null;
  };

  return (
    <AlunoContext.Provider
      value={{
        aluno,
        form,
        setForm,
        deleteAlunos,
        getAlunos,
        alunos,
        getAluno,
        setChange,
        saveForm,
      }}
    >
      <> {children}</>
    </AlunoContext.Provider>
  );
};
export const useAluno = () => {
  const context = useContext(AlunoContext);
  return context;
};
