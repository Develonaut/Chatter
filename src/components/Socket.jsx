import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { getAuthedUserSelector } from 'modules/AuthModule';

import {
  addMessage
} from 'modules/MessagesModule';

class Socket extends React.Component {
  constructor(props) {
    super(props);
    const PROXY = (process.env.NODE_ENV === 'development')
    ? 'http://localhost:5000'
    : 'https://chatter-react-server.herokuapp.com/';

    // Conntect the socket;
    this.socket = io.connect(PROXY);
  }

  componentDidMount() {
    this.socket.on("connected", this.onConnected);
    this.socket.on("joined", this.onMessage);
    this.socket.on("message", this.onMessage);
  }

  onConnected = (handshake) => {
    console.log(handshake);
    this.socket.emit("join", this.props.user);
  }

  onMessage = (message) => {
    const { addMessage: dispatchAddMessage } = this.props;
    console.log(message);
    dispatchAddMessage({
      body: message
    });
  }

  // function unregisterHandler() {
  //   socket.off('message')
  // }

  // socket.on('error', function (err) {
  //   console.log('received socket error:')
  //   console.log(err)
  // })

  // function register(name, cb) {
  //   socket.emit('register', name, cb)
  // }

  // function join(chatroomName, cb) {
  //   socket.emit('join', chatroomName, cb)
  // }

  // function leave(chatroomName, cb) {
  //   socket.emit('leave', chatroomName, cb)
  // }

  // function message(chatroomName, msg, cb) {
  //   socket.emit('message', { chatroomName, message: msg }, cb)
  // }

  // function getChatrooms(cb) {
  //   socket.emit('chatrooms', null, cb)
  // }

  // function getAvailableUsers(cb) {
  //   socket.emit('availableUsers', null, cb)
  // }

  render() {
    return this.props.children;
  }
}

function mapStateToProps(state) {
  return {
    user: getAuthedUserSelector(state),
  }
}

const mapDispatchToProps = {
  addMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Socket)

