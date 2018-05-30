import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header-footer">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-content">
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        <footer className="App-header-footer">
           <div>copy-rght: bochen2014@yahoo.com</div>
        </footer>
      </div>
    );
  }
}

export default App;
