import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Features from './components/features';

function App() {
  return (
    <>
    <Nav />
    <Home />
    <Features />
    </>
  );
}

export default App;