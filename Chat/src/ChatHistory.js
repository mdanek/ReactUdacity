import React, { Component } from 'react';

class ChatHistory extends Component {
  render() {
    const user = this.props.user;
    const messages = this.props.messages;
    
    return (      
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={message.username === user ? 'message sender' : 'message recipient'}>
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ChatHistory;