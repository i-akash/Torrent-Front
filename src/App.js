import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/pages/jsx/Home';
import Navbar from './component/navigation/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
