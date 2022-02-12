import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FeedbackOptions.module.css';

const cx = classNames.bind(styles);

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(opt => {
        const className = cx('button', `button__${opt}`);
        return (
          <button
            className={className}
            key={opt}
            onClick={() => onLeaveFeedback(opt)}
            type="button"
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
