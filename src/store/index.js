import { configureStore } from "@reduxjs/toolkit";
import alunoReducer from './slices/aluno/reducer'

export const store = configureStore({
  reducer: {
    aluno: alunoReducer
  },
});
