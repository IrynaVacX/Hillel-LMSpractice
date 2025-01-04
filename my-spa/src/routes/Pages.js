import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import AboutMe from '../pages/AboutMe';

export default function Pages() {
    const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  return (
      <div className={"page"}>
        <Routes>
          <Route path="/" element={<Home todos={todos} setTodos={setTodos} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
  );
}
