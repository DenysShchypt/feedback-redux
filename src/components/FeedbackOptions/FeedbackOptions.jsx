import React, { Component } from 'react';
import { AddFeedback, ButtonAddFeedback } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <AddFeedback>
        {options.map(option => (
          <ButtonAddFeedback key={option} type="button" name={option}  onClick={onLeaveFeedback}>
            {option}
          </ButtonAddFeedback>
        ))}
 
      </AddFeedback>
    );
  }
}

export default FeedbackOptions;