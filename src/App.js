import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produto from './Produto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Produto></Produto>
      </header>
    </div>
  );
}

export default App;
