import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
  return (
    <nav className="sticky">
      <IndexLink to="/" activeClassName="active" className="nav-item">HOME</IndexLink>

      <Link to="/skills" activeClassName="active" className="nav-item">SKILLS</Link>

      <Link to="/projects" activeClassName="active" className="nav-item">PROJECTS</Link>

      <Link to="/about" activeClassName="active" className="nav-item">ABOUT ME</Link>

      <Link to="/contact" activeClassName="active" className="nav-item">CONTACT</Link>

      { loading && <LoadingDots interval={ 100 } dots={ 20 }/> }
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
