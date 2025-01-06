"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todoSlice";
import "./TodoApp.css";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <div className={"container"}>
      <h1 className={"header"}>TODO</h1>
      <form onSubmit={handleSubmit} className={"form"}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={"input"}
          placeholder="Enter new todo"
        />
        <button type="submit" className={"button"}>
          Add
        </button>
      </form>

      <h2 className={"subheader"}>TODOS</h2>
      <div className={"todoList"}>
        {todos.map((todo) => (
          <div key={todo.id} className={"todoItem"}>
            {todo.text}
          </div>
        ))}
      </div>

      <footer className={"footer"}>Total : {todos.length}</footer>
    </div>
  );
}
