import React from 'react';
import { connect } from 'react-redux';
import { getAuthedUserSelector, signOut } from 'modules/AuthModule';

class Chat extends React.Component {
  render() {
    const { 
      user: {
        avatar,
        name,
      },
      signOut: dispatchSignOut,
    } = this.props;
    return(
      <React.Fragment>
        <ul>
          <li>Chat goes here</li>
        </ul>
        <form action="">
          input goes here
        </form>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: getAuthedUserSelector(state),
  }
}

const mapDispatchToProps = {
  signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)