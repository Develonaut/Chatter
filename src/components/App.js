import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from 'conf/routes.js';

import 'stylesheets/App.css';

export default class App extends Component {
  render() {
    return (
      routes.map(route => {
        return (
          <Route key={route.path} {...route} />);
      })
    );
  }
}