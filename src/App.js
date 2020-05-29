import React from 'react';
import logo from './logo.svg';
import './App.css';
import aṕi from './services/api'
import api from './services/api';

function App() {
  
  function getRequest() {
    api.get('/jokes/random').then(response => {
      console.log(response)
  })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Primeiro app em react</h1>
        <button onClick={() => getRequest()}>
          CLica aqui para fazer a requisição
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
