import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">HOME </IndexLink>

      <Link to="/skills" activeClassName="active">SKILLS </Link>

      <Link to="/projects" activeClassName="active">PROJECTS </Link>

      <Link to="/about" activeClassName="active">ABOUT ME </Link>

      <Link to="/contact" activeClassName="active">CONTACT </Link>

      { loading && <LoadingDots interval={ 100 } dots={ 20 }/> }
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
