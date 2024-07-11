import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Account from './components/pages/Account';
import About from './components/pages/About';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Verify from './components/pages/auth/Verify';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/account' element={<Account />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/verify' element={<Verify />}/>
      </Routes>

      </BrowserRouter>
      </div>
  )
}

export default App