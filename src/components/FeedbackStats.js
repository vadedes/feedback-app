// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //Calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, ''); //set avg to 1 decimal place only and remove trailing zeros(if any)
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      {/* show zero instead of NaN when all comments are deleted */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
