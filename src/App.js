import React, { useState } from 'react';
import { LoginContext } from './Components/LoginContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/LogIn/SignUp';
import Course from './Pages/Course/Course';
import Forum from './Pages/Forum/Forum';


import Compose from './Pages/Forum/Compose';
import { useEffect } from 'react';
import CommunityBoard from './Pages/Forum/CommunityBoard';


export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loginInfo = localStorage.getItem('login');
    if (loginInfo == 'true') {
      setLoggedIn(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path='login' element={<LogIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='Course' element={<Course />} />
            <Route path='Forum'  element={<Forum />} />
            <Route path='/Forum/CommunityBoard' element={<CommunityBoard />} />
            <Route path='/Forum/CommunityBoard/Compose' element={<Compose />} />

           
          </Routes>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
  );
}
//<Route path='/Forum/CommunityBoard/Compose' element={<Compose />} />