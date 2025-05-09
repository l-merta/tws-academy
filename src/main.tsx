import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RedirectScroll from './managers/RedirectScroll';
import ScrollToAnchor from './managers/ScrollToAnchor';

import Home from './pages/Home';
import Warrior from './pages/Warrior';
import Scout from './pages/Scout';
import Mage from './pages/Mage';

import './styles/index.css';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <RedirectScroll />
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rytir" element={<Warrior />} />
        <Route path="/pruzkumnik" element={<Scout />} />
        <Route path="/carodej" element={<Mage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
