import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoSlice'; // Importa el reducer que creamos

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Asigna el reducer al slice 'todos' del estado global
  },
});