import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Warrior from './pages/Warrior';
import Scout from './pages/Scout';
import Mage from './pages/Mage';

import './styles/index.css';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rytir" element={<Warrior />} />
        <Route path="/pruzkumnik" element={<Scout />} />
        <Route path="/carodej" element={<Mage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
