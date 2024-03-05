import React, { useState } from 'react'
import  { Toaster } from 'react-hot-toast';
// import allRoutes from './routes/allRoutes'
import './App.css'
import Register from './components/pages/signup/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import SearchInput from './components/sidebar/SearchInput';
import Sidebar from './components/sidebar/Sidebar';

function App() {
 

  return (
    <>
<div className="p-4 h-screen flex items-center justify-center">

  {/* <Home/> */}

    {/* <Sidebar/> */}

    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/" element={<Home/>} />
      </Routes>
     
    </BrowserRouter>
</div>
    </>
  )
}

export default App
