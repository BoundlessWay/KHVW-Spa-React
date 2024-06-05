import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import TodoList from './components/Todo/TodoList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './assets/styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
