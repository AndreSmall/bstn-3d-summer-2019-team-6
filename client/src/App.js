import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          lETS DO THIS SHIT!!!!!
        </p>

        <a
          className='App-link'
          href={`http://localhost:8080/ping`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Local Express Server ping! We have a change.
        </a>
      </header>
    </div>
  );
}

export default App;
