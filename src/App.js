import React from "react";
import "./styles.css";
class App extends React.Component {
  state = {
    times: 0
  };
  render() {
    return (
      <div className="App">
        <h1>Hello World {this.state.times}</h1>
        <button onClick={() => this.setState({ times: this.state.times + 1 })}>
          {" "}
          more times
        </button>
      </div>
    );
  }
}

export default App;
