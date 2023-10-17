import { AddFeedback, ButtonAddFeedback } from './FeedbackOptions.styled';

import React from 'react'

export const FeedbackOptions = ({onLeaveFeedback, options}) => {

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
export default FeedbackOptions;