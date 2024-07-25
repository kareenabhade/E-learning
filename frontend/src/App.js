import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Courses from './components/pages/Others/Courses/Courses'
import Account from './components/pages/Account';
import About from './components/pages/About';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Verify from './components/pages/auth/Verify';
import { UserData } from './Context/UserContext';
import { Load } from './components/Load';
import CourseDescription from './components/pages/Others/Courses/CourseDescription';


const App = () => {
  const {isAuth, user, load} = UserData();
  return (
    <div>
      {load?<Load />:<BrowserRouter>
      <Header isAuth={isAuth} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/account' element={ isAuth?<Account user={user} />:<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={isAuth?<Home />:<Login />}/>
        <Route path='/register' element={isAuth?<Home />:<Register />}/>
        <Route path='/verify' element={isAuth?<Home />:<Verify />}/>
        <Route path='/course/:id' element={isAuth?<CourseDescription />:<Login />}/>
      </Routes>
      </BrowserRouter>}
      </div>
  )
}

export default App