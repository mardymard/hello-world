import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1><code>Shut that shit up!!!!!!!!!</code></h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>Da</Button>
          <Button>Hell</Button>
          <Button>Up</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
