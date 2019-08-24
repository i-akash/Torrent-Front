import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navigation/Navbar';
import Route from './component/navigation/Route'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route/>
      <div style={{height:"10rem"}}>
          
      </div>
    </div>
  );
}

export default App;
