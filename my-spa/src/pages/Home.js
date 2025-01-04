import React, { useState, useEffect } from "react";
import './Home.css';
import TodoForm from '../components/TodoForm';

export default function Home() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  return (
    <div className={"home"}>
      <h1>To-Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.description} [{todo.priority}]
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
