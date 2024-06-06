import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './assets/styles/App.css';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <MainContent />
    </Router>
  );
};

export default App;
