import { useState } from 'react';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default function App() {
  const [goodAmount, setGoodAmount] = useState(0);
  const [neutralAmount, setNeutralAmount] = useState(0);
  const [badAmount, setBadAmount] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  function onLeaveFeedback(option) {
    switch (option) {
      case 'good':
        setGoodAmount(v => v + 1);
        break;

      case 'neutral':
        setNeutralAmount(v => v + 1);
        break;

      case 'bad':
        setBadAmount(v => v + 1);
        break;

      default:
    }
  }

  function getTotalFeedback() {
    return goodAmount + neutralAmount + badAmount;
  }

  function getPositivePercentage() {
    const total = getTotalFeedback();

    if (total) {
      return Math.round((goodAmount * 100) / total);
    }

    return 100;
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {getTotalFeedback() ? (
          <Statistics
            good={goodAmount}
            neutral={neutralAmount}
            bad={badAmount}
            total={getTotalFeedback()}
            positivePercentage={getPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
