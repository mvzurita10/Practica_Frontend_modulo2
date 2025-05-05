import React from 'react';
import { useSelector } from 'react-redux'; // Hook para seleccionar datos del store
import TodoItem from './TodoItem';

function TodoList() {
  // useSelector para obtener el array 'todos' del estado global de Redux
  const todos = useSelector((state) => state.todos);

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.length === 0 ? (
        <p>No hay tareas pendientes.</p>
      ) : (
        todos.map((todo) => (
          // Renderiza un TodoItem por cada tarea, pasando el objeto 'todo' y una 'key' única
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </ul>
  );
}

export default TodoList;