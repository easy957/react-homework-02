import { Component } from 'react';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default class App extends Component {
  state = {
    goodAmount: 0,
    neutralAmount: 0,
    badAmount: 0,
  };

  getTotalFeedback = () => {
    const { goodAmount, neutralAmount, badAmount } = this.state;
    return goodAmount + neutralAmount + badAmount;
  };
  getPositivePercentage = () => {
    const { goodAmount } = this.state;
    const total = this.getTotalFeedback();

    if (total) {
      return Math.round((goodAmount * 100) / total);
    }

    return 100;
  };
  onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        this.setState(prevState => ({
          goodAmount: prevState.goodAmount + 1,
        }));
        break;

      case 'neutral':
        this.setState(prevState => ({
          neutralAmount: prevState.neutralAmount + 1,
        }));
        break;

      case 'bad':
        this.setState(prevState => ({
          badAmount: prevState.badAmount + 1,
        }));
        break;

      default:
    }
  };

  render() {
    const { goodAmount, neutralAmount, badAmount } = this.state;
    const totalFeedback = this.getTotalFeedback();
    const positivePercentage = this.getPositivePercentage();
    const options = { good: 'good', neutral: 'neutral', bad: 'bad' };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={goodAmount}
              neutral={neutralAmount}
              bad={badAmount}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
