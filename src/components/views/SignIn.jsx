import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Helmet from 'react-helmet';
import shortId from 'shortid';
import {
  signIn,
  getAuthedUserSelector
} from 'modules/AuthModule';
import { Urls } from '../../conf/urls';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: shortId.generate(),
      avatar: 'https://picsum.photos/200',
      name: '',
    };
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      signIn: dispatchSignIn,
    } = this.props;
    dispatchSignIn({...this.state});
  }

  render() {
    const { user: { id = null } = {} } = this.props;
    if (id) {
      return <Redirect to={Urls.DASHBOARD} />
    }

    return (
      <div className="Dashboard">
        <Helmet title="Signin" />
            <form onSubmit={this.handleSubmit}>
            <label>Name:
              <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signIn,
}

function mapStateToProps(state) {
  return {
    user: getAuthedUserSelector(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
