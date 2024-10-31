import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alunos: [],
  detalhe: {},
  loading: false,
};

export const counterSlice = createSlice({
  name: "aluno",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAlunos: (state, action) => {
      state.alunos = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setAlunos, setDetalhes, setLoading } = counterSlice.actions;

export default counterSlice.reducer;
