import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/Todolist';

function App() {
  // Ya no necesitamos useEffect aquí para guardar,
  // porque lo hacemos directamente en el reducer (todoSlice.js)
  // al añadir o eliminar tareas, lo cual es más eficiente con Redux Toolkit.
  // El estado inicial ya se carga desde localStorage en todoSlice.js también.

  return (
    <div className="App" style={{ maxWidth: '600px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Lista de Tareas (React + Redux)</h1>
      <AddTodo />   {/* Componente para añadir tareas */}
      <TodoList />  {/* Componente para mostrar la lista */}
    </div>
  );
}

export default App;
