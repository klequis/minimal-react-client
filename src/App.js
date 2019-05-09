import React from "react";
import logo from "./logo.svg";
import "./App.css";

const codeStyle = {
  color: 'white',
  textAlign: 'left'
}
class App extends React.Component {

  state = {
    data: undefined
  }
  async componentDidMount() {
    const r1 = await fetch("https://api.klequis-todo.tk");
    const data = await r1.json()
    this.setState({ data: data })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <pre style={codeStyle}>{JSON.stringify(this.state.data, null, 4)}</pre>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
