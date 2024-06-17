import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {} from './context/Firebase';
import RegisterPage from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={ <h1>Home</h1>} />
      </Routes>
    </>
  );
}

export default App;
