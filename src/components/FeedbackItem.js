import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from '../shared/Card';

function FeedbackItem({ item, handleDelete }) {
   return (
      <Card>
         <div className='num-display'>{item.rating}</div>
         <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple' />
         </button>
         <div className='text-display'>{item.text}</div>
      </Card>
   );
}

//Setting of proptypes is optional, only when we need to be strict on what data can be accepted
FeedbackItem.propTypes = {
   item: PropTypes.object.isRequired,
};

export default FeedbackItem;
