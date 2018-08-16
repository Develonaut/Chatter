import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { getAuthedUserSelector, signOut } from 'modules/AuthModule';
=======
import { getAuthedUserSelector } from 'modules/AuthModule';
>>>>>>> 553820f409f39a2b1edb7c264ca62e6219fd64e4

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