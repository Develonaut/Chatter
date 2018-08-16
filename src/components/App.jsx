import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'conf/routes.js';

import 'stylesheets/components/App.css';

export default class App extends Component {
  render() {
    return (
      <Switch>
      {
        routes.map(route => {
          return (
            <Route key={route.path} {...route} />);
        })
      }
      </Switch >
    );
  }
}