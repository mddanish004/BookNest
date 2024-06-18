import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import MyNavBar from './components/Navbar';
import ListingPage from './pages/List';

function App() {
  return (
    <>
    <div>
      <MyNavBar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<h1>Home</h1>} />
        <Route path='/book/list' element={<ListingPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
