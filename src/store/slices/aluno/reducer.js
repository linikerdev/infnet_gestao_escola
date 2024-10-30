import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alunos: [],
  detalhe: {},
};

export const counterSlice = createSlice({
  name: "aluno",
  initialState,
  reducers: {
    setAlunos: (state, action) => {
      state.alunos = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setAlunos, setDetalhes } = counterSlice.actions;

export default counterSlice.reducer;
