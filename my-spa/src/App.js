import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Pages from './routes/Pages';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ErrorBoundary>
    <Router>
    <div className={`${"app"} ${isDarkTheme ? "dark" : "light"}`}>
      <Header 
        isDarkTheme={isDarkTheme} 
        toggleTheme={toggleTheme} 
      />
      <main className={"main"}>
        <Pages/>
      </main>
    </div>
    </Router>
    </ErrorBoundary>
  );
}
