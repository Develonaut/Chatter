import React, { Component } from 'react';
import socket from '../lib/socket-client';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.client = socket();

    const logMessage = (data) => {
      console.log(data);
    }  

    this.client.registerHandler(logMessage);
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
