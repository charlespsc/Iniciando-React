import { FormEvent, useRef } from "react";
import logo from './logo.svg';
import "./Form.css";

export function Form() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
  
    //react hooks 

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(nameRef.current?.value);
        console.log(emailRef.current?.value);
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
        <div className="form-group">
            <label htmlFor="name">Nome: </label>
            <input type="text" id="name" ref={nameRef}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" ref={emailRef}/>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <br></br>
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