import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { getBad, getGood, getNeutral } from 'redux/selectors';
import { setGood } from 'redux/goodSlice';
import { setNeutral } from 'redux/neutralSlice';
import { setBad } from 'redux/badSlice';

export const App = () => {
  const good =useSelector(getGood);
  const neutral = useSelector(getNeutral);
  const bad = useSelector(getBad);
  const dispatch = useDispatch();

  const handleFeedback = ({ target }) => {
    switch (target.name) {
      case "good":
        dispatch(setGood(target.name))
        break;
      case "neutral":
        dispatch(setNeutral(target.name))
        break;
      case "bad":
        dispatch(setBad(target.name))
        break;
        default:
          return;


    }
   
   
   
    }


  const countTotalFeedback = (a, b, c) => a + b + c;

  const countPositiveFeedbackPercentage = (a, b, c) =>
    Math.round((100 / (a + b + c)) * a);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(good, neutral, bad) !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
