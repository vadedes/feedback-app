import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
          <h3>{text}</h3>
        </Link>
        {/* <NavLink to='/' activeClassName='active' style={{ color: '#fff', textDecoration: 'none', paddingRight: '1rem' }}>
          Home
        </NavLink>
        <NavLink to='/about' activeClassName='active' style={{ color: '#fff', textDecoration: 'none' }}>
          About
        </NavLink> */}
      </div>
    </header>
  );
}

//OPTIONAL CONFIGS
//set default value if no props is passed in
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#fff',
};

//type checking on props
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
