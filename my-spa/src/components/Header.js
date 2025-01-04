import React from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from 'lucide-react'
import './Header.css';

export default function Header({ setCurrentPage, isDarkTheme, toggleTheme }) {
  return (
    <header className={"header"}>
      <nav>
        <ul>
          <li><Link to="/" className={!isDarkTheme ? 'light-link' : 'dark-link'}>Home</Link></li>
          <li><Link to="/contacts" className={!isDarkTheme ? 'light-link' : 'dark-link'}>Contacts</Link></li>
          <li><Link to="/about" className={!isDarkTheme ? 'light-link' : 'dark-link'}>About Me</Link></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className={"themeToggle"}>
        {isDarkTheme ? 
          <SunIcon className={"icon sunIcon"} /> : 
          <MoonIcon className={"icon moonIcon"} />}
      </button>
    </header>
  );
}

