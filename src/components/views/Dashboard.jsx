import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Socket from 'components/Socket';
import requireAuth from 'components/containers/AuthContainer';
import Nav from 'components/shared/Nav';
import Chat from 'components/shared/Chat';

class Dashboard extends Component {
  render() {
    return (
      <Socket>
        <div className="Dashboard">
          <Helmet title="Dashboard" />
          <header className="dashboard-header">
            <h1 className="dashboard-title">Dashboard</h1>
          </header>
          <Nav />
          <Chat />
        </div>
      </Socket>
    );
  }
}

export default requireAuth(
  connect()(Dashboard)
);
