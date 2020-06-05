import React, { Component } from 'react';
import ChatHistory from './ChatHistory';
import AddMessage from './AddMessage';

class ChatWindow extends Component {
  render() {
    const user = this.props.user;
    const messages = this.props.messages;
    
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user}</div>
        <ChatHistory user={user} messages={messages} />
        <AddMessage user={user} addMessage={this.props.addMessage}/>
      </div>
    );
  }
}

export default ChatWindow;