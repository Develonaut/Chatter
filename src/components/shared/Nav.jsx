import React from 'react';
import { connect } from 'react-redux';
import { getAuthedUserSelector } from 'modules/AuthModule';

class Nav extends React.Component {
  render() {
    const { user: {
      avatar,
      name,
    } } = this.props;
    return(
      <nav>
        {name}
        <img src={avatar} alt={`${name}'s Avatar`}/>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: getAuthedUserSelector(state),
  }
}

export default connect(mapStateToProps)(Nav)