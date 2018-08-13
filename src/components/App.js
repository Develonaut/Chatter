import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import socket from '../lib/socket-client';

import './../stylesheets/App.css';

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
        <Helmet title="Create React App Static Boilerplate" />
        <header className="App-header">
          <h1 className="App-title">Welcome to Create React App Boilerplate!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapPropsToDispatch = {
  
}

export default connect(null, mapPropsToDispatch)(App);
