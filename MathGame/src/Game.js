import React, { Component } from 'react';

class Game extends Component {
  
  constructor (props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3]
    }
  }
  
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }

  updateState = (newValues) => {
    this.setState(currState => ({
      value1: newValues[0],
      value2: newValues[1],
      value3: newValues[2],
      proposedAnswer: newValues[3],
    }));
  }

  handleAnswer = (event) => {
    const newValues = this.makeNewQuestion();
    this.updateState(newValues);
    const isCorrect = this.evaluateAnswer(event.target.name);
    this.props.handleAnswer(isCorrect);
  }

  evaluateAnswer = (answer) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const correctAns = value1 + value2 + value3;
    return ((proposedAnswer === correctAns && answer) === 'true' || 
            (proposedAnswer !== correctAns && answer === 'false'))
  }

  render () {
    return (
      <div className="equation">
       <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
       <button name="true" onClick={this.handleAnswer}>True</button>
       <button name="false" onClick={this.handleAnswer}>False</button>
     </div>
    )
  }
}

export default Game;