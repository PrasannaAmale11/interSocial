import React, { useState } from 'react'
// import allRoutes from './routes/allRoutes'
import './App.css'
import Register from './components/pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/pages/Signin';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/SignIn" element={<Signin />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
