import React, { Component } from 'react';
import socket from '../lib/socket-client';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: socket(),
    }

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        Chat is gonna go here!
      </div>
    );
  }
}

export default App;
