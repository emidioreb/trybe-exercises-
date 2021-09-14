
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this)
  }

handleClick(){
  this.setState((prevState) => ({
    counter: prevState.counter + 1
  }))
}

render() {
    const { counter } = this.state

    return (
      <div>
        <div>Counter: {counter}</div>
        <button
          type="button"
          onClick={this.handleClick}
        >
          Increase Counter
        </button>
      </div>
    );
  }
}

export default App;