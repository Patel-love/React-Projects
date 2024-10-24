import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../App.js'; 

function Reduxtodo() {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editId) {
        dispatch(editTodo({ id: editId, newText: input }));
        setEditId(null);
      } else {
        dispatch(addTodo(input));
      }
      setInput('');
    }
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add or edit a task"
          className="todo-input"
        />
        <button type="submit" className="todo-button">{editId ? 'Update Todo' : 'Add Todo'}</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEdit(todo)} className="edit-button">Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reduxtodo;
