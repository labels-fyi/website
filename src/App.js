import React, { Component } from 'react';
import logo from './labels.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Find complications for any FDA approved medicine.
          </p>
          <a
            className="App-link"
            href="mailto:hello@labels.fyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
