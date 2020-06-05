import React from 'react';

const Score = props => {
  return (
    <p className="text">
      Your Score: {props.state.numCorrect}/{props.state.numQuestions}
    </p>
  )
}

export default Score;