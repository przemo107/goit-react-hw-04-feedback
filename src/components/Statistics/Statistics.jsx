import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={css.statlist}>
        <li className={css.stat}>Good: {good}</li>
        <li className={css.stat}>Neutral: {neutral}</li>
        <li className={css.stat}>Bad: {bad}</li>
        <li className={css.stat}>Total: {total}</li>
        <li className={css.stat}>Positive feedback: {positivePercentage}</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
