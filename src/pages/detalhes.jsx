import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorAluno from "../components/error";
import { getDetalhesAluno } from "../store/slices/aluno/actions";
import { useDispatch, useSelector } from "react-redux";

function Detalhes() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const aluno = useSelector((state) => state.aluno.detalhe);

  useEffect(() => {
    dispatch(getDetalhesAluno(id));
  }, [dispatch, id]);

  if (!aluno) {
    return <ErrorAluno />;
  } else {
    return <Form isEdit />;
  }
}

export default Detalhes;
