import { createSlice } from '@reduxjs/toolkit';

// Función para cargar el estado inicial desde localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return []; // Si no hay nada guardado, retorna un array vacío
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return []; // En caso de error, retorna un array vacío
  }
};

// Función para guardar el estado en localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
    // Manejar errores de escritura si es necesario
  }
};

const initialState = loadState(); // Carga el estado inicial

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Acción para añadir una nueva tarea
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(), // ID simple basado en timestamp
        text: action.payload, // El texto viene en el payload de la acción
        completed: false, // Por defecto, las tareas no están completadas
      };
      state.push(newTodo); // Añade la nueva tarea al array (Redux Toolkit permite "mutar" el estado aquí)
      saveState(state); // Guarda el nuevo estado en localStorage
    },
    // Acción para eliminar una tarea
    deleteTodo: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload); // Filtra el ID a eliminar
      saveState(newState); // Guarda el nuevo estado en localStorage
      return newState; // Retorna el nuevo array filtrado
    },
    // (Opcional) Acción para marcar una tarea como completada/incompleta
    toggleTodo: (state, action) => {
       const todo = state.find(todo => todo.id === action.payload);
       if (todo) {
         todo.completed = !todo.completed;
       }
       saveState(state); // Guarda el estado actualizado
    }
  },
});

// Exporta las acciones generadas automáticamente por createSlice
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

// Exporta el reducer generado
export default todoSlice.reducer;