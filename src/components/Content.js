import PropTypes from 'prop-types';

export default function Content({ text }) {
   return (
      <div className='container'>
         <h1>{text}</h1>
      </div>
   );
}

//OPTIONAL CONFIGS
//set default value if no props is passed in
Content.defaultProps = {
   text: 'Feedback UI',
};

//type checking on props
Content.propTypes = {
   text: PropTypes.string,
};
