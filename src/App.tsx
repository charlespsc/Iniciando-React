import React, { FormEvent, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Charles Pereira - Senai - CTAI<br>
          </br>Aplicação desenvolvida em TypeScript + Docker <br>
          </br>Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" id="name" ref={nameRef}/>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email"/>
          </div>
          <button type="submit">Enviar</button>
        </form>
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
