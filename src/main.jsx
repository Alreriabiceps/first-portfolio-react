import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="app" element={<App />} />
        <Route path="navbar" element={<Navbar />} />
      </Routes>
    </StrictMode>
    </BrowserRouter>
);