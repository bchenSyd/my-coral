import React from "react";
import logo from "./logo.svg";
import Bootstrap from "./bootstrap";

const App = ({ location }) => (
  <div className="App">
    <header className="App-header-footer">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="App-content">
      <Bootstrap location={location} />
    </div>
    <footer className="App-header-footer">
      <div>copy-rght: bochen2014@yahoo.com</div>
    </footer>
  </div>
);

export default App;
