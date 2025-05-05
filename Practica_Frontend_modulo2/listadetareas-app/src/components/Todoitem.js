import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/TodoSlice'; // Importa las acciones

// Recibe el objeto 'todo' como prop
function TodoItem({ todo }) {
  const dispatch = useDispatch(); // Hook para despachar acciones

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id)); // Despacha la acción deleteTodo con el ID
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id)); // Despacha la acción toggleTodo con el ID
  }

  return (
    <li style={{
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: todo.completed ? 'line-through' : 'none' // Tacha si está completada
      }}>
      <span onClick={handleToggle} style={{ cursor: 'pointer', flexGrow: 1 }}>
          {todo.text}
      </span>
      <button onClick={handleDelete} style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', cursor: 'pointer' }}>
        Eliminar
      </button>
    </li>
  );
}

export default TodoItem;