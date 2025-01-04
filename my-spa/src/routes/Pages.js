import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import AboutMe from '../pages/AboutMe';

export default function Pages() {
  return (
      <div className={"page"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
  );
}
