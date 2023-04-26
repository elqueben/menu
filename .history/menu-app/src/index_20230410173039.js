import React from 'react';
import ReactDOM from 'react-dom/client';
import { BroweserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';
import { Welcome } from './pages/welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BroweserRouter>
  <React.StrictMode>
  
    <Route path='/' element={<Welcome />} />
  </React.StrictMode>
  </BroweserRouter>
);