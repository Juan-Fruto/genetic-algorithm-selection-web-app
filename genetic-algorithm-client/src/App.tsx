import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneticAlgorithm from './pages/GeneticAlgorithm';
import Statistics from './pages/Statistics';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneticAlgorithm/>}/>
          <Route path='/statistics' element={<Statistics/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App