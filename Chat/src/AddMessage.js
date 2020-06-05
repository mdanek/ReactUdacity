import React, { Component } from 'react';

class AddMessage extends Component {
  state = {
    text: ''
  }

  isDisabled = () => {
    if (this.state.text.length < 1) return true;
  };
  
  updateText = (event) => {
    this.setState({text: event.target.value});
  }

  addMessage = (event) => {
    const message = {
      username: this.props.user,
      text: this.state.text
    }
    event.preventDefault();
    this.props.addMessage(message);
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.addMessage}>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter your message..." 
          value={this.state.text}
          onChange={this.updateText}/>
        <div className="input-group-append">
          <button 
            className="btn submit-button" 
            disabled={this.isDisabled()}>SEND</button>
        </div>
      </form>
    );
  }
}

export default AddMessage;