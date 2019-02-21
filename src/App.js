import React, { Component } from 'react';
import PinPad from './containers/PinPad/PinPad'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
      <PinPad/>
      </div>
    );
  }
}

export default App;
