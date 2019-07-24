import React, { useState } from "react";
import logo from './logo.png';
import './App.css';
import Form from './components/Form/Form';

function App() {


  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="400px"/>

      </header>
      <Form />
    </div>
  );
}

export default App;
