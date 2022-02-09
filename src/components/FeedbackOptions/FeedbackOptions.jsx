import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.shape({
      good: PropTypes.string,
      neutral: PropTypes.string,
      bad: PropTypes.string,
    }),
    onLeaveFeedback: PropTypes.func,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    const { good, neutral, bad } = options;

    return (
      <div>
        <button
          className={s.button__green}
          onClick={() => onLeaveFeedback(good)}
          type="button"
        >
          Good
        </button>
        <button
          className={s.button__grey}
          onClick={() => onLeaveFeedback(neutral)}
          type="button"
        >
          Neutral
        </button>
        <button
          className={s.button__red}
          onClick={() => onLeaveFeedback(bad)}
          type="button"
        >
          Bad
        </button>
      </div>
    );
  }
}
