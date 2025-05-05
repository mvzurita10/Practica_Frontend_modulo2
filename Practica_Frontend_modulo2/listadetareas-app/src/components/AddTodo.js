import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/TodoSlice'; // Importa la acción de añadir

function AddTodo() {
  const [text, setText] = useState(''); // Estado local para el input
  const dispatch = useDispatch(); // Hook para despachar acciones de Redux

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del form
    if (text.trim()) { // Solo añade si el texto no está vacío (después de quitar espacios)
      dispatch(addTodo(text)); // Despacha la acción addTodo con el texto como payload
      setText(''); // Limpia el input después de añadir
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añadir nueva tarea..."
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>
        Añadir Tarea
      </button>
    </form>
  );
}

export default AddTodo;