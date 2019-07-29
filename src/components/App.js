import React, { Component } from "react";

import Output from "./output";
import Keypad from "./keypad";
import "../style.css";

class App extends Component {
  state = {
    result: ""
  };

  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else {
      this.setState({ result: this.state.result + buttonName });
    }
    if (buttonName === "CE") {
      this.backspace();
    }
    if (buttonName === "C") {
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="content">
          <Output result={this.state.result} />
          <Keypad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}
export default App;
