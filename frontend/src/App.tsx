import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isPlayRoute = location.pathname === '/play';

  return (
    <div className={`App ${isPlayRoute ? 'no-flex' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
