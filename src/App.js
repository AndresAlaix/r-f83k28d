import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.count = this.count.bind(this);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button onClick={this.count} id="inc">Incrementa</button>
      </div>
    );
  }

  count() {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default App;

