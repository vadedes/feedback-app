import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
   const headerStyles = {
      backgroundColor: bgColor,
      color: textColor,
   };

   return (
      <header className='header' style={headerStyles}>
         <div className='container'>
            <h3>{text}</h3>
         </div>
      </header>
   );
}

//OPTIONAL CONFIGS
//set default value if no props is passed in
Header.defaultProps = {
   text: 'Navbar',
   bgColor: 'rgba(0,0,0,0.4)',
   textColor: '#ff6a95',
};

//type checking on props
Header.defaultProps = {
   text: PropTypes.string,
   bgColor: PropTypes.string,
   textColor: PropTypes.string,
};

export default Header;
