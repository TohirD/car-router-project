import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Components/providers/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
