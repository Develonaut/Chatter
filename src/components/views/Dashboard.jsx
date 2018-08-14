import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import socket from 'lib/socket-client';
import requireAuth from 'components/containers/AuthContainer';

class Dashboard extends Component {
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
      <div className="Dashboard">
        <Helmet title="Dashboard" />
        <header className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
        </header>
      </div>
    );
  }
}

export default requireAuth(
  connect()(Dashboard)
);
