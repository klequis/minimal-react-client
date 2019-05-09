import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    const r1 = await fetch('https://api.klequis-todo.tk')
    console.log('r1', await r1.json())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
}

export default App;
