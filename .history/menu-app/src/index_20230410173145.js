import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';
import { Welcome } from './pages/welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <App />
    <Route path='/' element={<Welcome />} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);