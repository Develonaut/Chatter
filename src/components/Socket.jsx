import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { getEventsSelector, storeEvents } from 'modules/EventsModule';
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
    const {
      CONNECTED,
      JOIN_RESPONSE,
      MESSAGE_SEND,
    } = this.props.eventsCapsule || {};

    this.socket.on(CONNECTED, this.onConnected);
    this.socket.on(JOIN_RESPONSE, this.onMessage);
    this.socket.on(MESSAGE_SEND, this.onMessage);
  }

  componentWillUnmount() {
    // If we're unmount be sure to kill all the socket
    // events.
    this.socket.removeAllListeners();
  }

  onConnected = ({ eventsCapsule, message }) => {
    const { 
      storeEvents: dispatchStoreEvents,
      user,
    } = this.props;

    console.log(message);
    dispatchStoreEvents(eventsCapsule);
    this.socket.emit(eventsCapsule.JOIN_REQUEST, user);
  }

  onMessage = (message) => {
    const { addMessage: dispatchAddMessage } = this.props;
    console.log(message);
    dispatchAddMessage({
      body: message,
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
    eventsCapsule: getEventsSelector(state),
  }
}

const mapDispatchToProps = {
  storeEvents,
  addMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Socket)

