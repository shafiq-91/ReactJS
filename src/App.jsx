import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
function App() {
  return (
    <>
    <Nav />
    <Home />
    </>
  );
}

export default App;