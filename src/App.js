import React, { useState } from "react";
import logo from './logo.png';
import './App.css';
import Form, { UserForm } from './components/Form/UserForm';
import './index.css';

function App() {

  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="400px"/>
          Pokemon Trainer Team Builder
      </header> */}
      <UserForm />
    </div>
  );
}

export default App;
