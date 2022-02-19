import PropTypes from 'prop-types';

function Card({ children, reverse }) {
   //conditional class method
   //    return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

   //conditional style method
   return (
      <div
         className='card'
         style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
         }}
      >
         {children}
      </div>
   );
}

//Setting of proptypes is optional, only when we need to be strict on what data can be accepted
Card.defaultProps = {
   reverse: false,
};

Card.propTypes = {
   children: PropTypes.node.isRequired,
   reverse: PropTypes.bool,
};

export default Card;
