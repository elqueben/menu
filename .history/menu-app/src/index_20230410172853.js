import React from 'react';
import ReactDOM from 'react-dom/client';
import { BroweserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);