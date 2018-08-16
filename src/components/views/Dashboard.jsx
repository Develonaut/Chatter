import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import requireAuth from 'components/containers/AuthContainer';
import Nav from 'components/shared/Nav';
import { mapStateToProps } from '../containers/AuthContainer';
import Socket from 'components/Socket';

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
        </div>
      </Socket>
    );
  }
}

export default requireAuth(
  connect()(Dashboard)
);
