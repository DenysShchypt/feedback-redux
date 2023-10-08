import { ElementStatistic } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
      <>
          <ElementStatistic>Good: {good}</ElementStatistic>
          <ElementStatistic>Neutral: {neutral}</ElementStatistic>
          <ElementStatistic>Bad: {bad}</ElementStatistic>
          <ElementStatistic>Total: {total(good,neutral,bad)}</ElementStatistic>
          <ElementStatistic>
            Positive feedback: 
            {positivePercentage(good,neutral,bad)?positivePercentage(good,neutral,bad) :0}%
          </ElementStatistic>
        </>
    )
  }
  
  export default Statistics;