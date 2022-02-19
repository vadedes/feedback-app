import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
   if (!feedback || feedback.length === 0) {
      return <p>No Feedback Yet</p>;
   }

   return (
      <div className='feedback-list'>
         {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
         ))}
      </div>
   );
}

//Setting of proptypes is optional, only when we need to be strict on what data can be accepted
FeedbackList.propTypes = {
   //    feedback: PropTypes.array, option 1
   //option 2
   feedback: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         text: PropTypes.string.isRequired,
         rating: PropTypes.number.isRequired,
      })
   ),
};

export default FeedbackList;
