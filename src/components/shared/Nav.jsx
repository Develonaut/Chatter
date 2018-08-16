import React from 'react';
import { connect } from 'react-redux';
import { getAuthedUserSelector, signOut } from 'modules/AuthModule';

class Nav extends React.Component {
  render() {
    const { 
      user: {
        avatar,
        name,
      },
      signOut: dispatchSignOut,
    } = this.props;
    return(
      <nav>
        {name}
        <img src={avatar} alt={`${name}'s Avatar`}/>
        <button onClick={() => { dispatchSignOut() }}>Sign Out</button>
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