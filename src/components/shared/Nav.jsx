import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getAuthedUserSelector, signOut } from 'modules/AuthModule';
import { Urls } from '../../conf/urls';

class Nav extends React.Component {
  handleClick = (event) => {
    const {
      signOut: dispatchSignOut,
    } = this.props;
    event.preventDefault();
    dispatchSignOut();
  }

  render() {
    const { user: {
      avatar,
      name,
    } } = this.props;
    return(
      <nav>
        {name}
        <img src={avatar} alt={`${name}'s Avatar`}/>
        <button onClick={this.handleClick}>Sign Out</button>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav)