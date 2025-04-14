import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import './CSS/styles.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainPage />
    </div>
  );
};

export default App; 