import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux';
{/* import LoadingDots from './LoadingDots'; */}

class Header extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      transform: -60
    };

    this.handleScroll = this.handleScroll.bind(this);
    {/* this.state = { loading }; */}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    console.log("Scrolling!");
    let scrollTop = event.srcElement.body.scrollTop, itemTranslate = Math.min(0, scrollTop/3 - 60);

    console.log("Scroll Top: ", scrollTop);
    this.setState({
      transform: itemTranslate
    });
    console.log("itemTranslate: ", itemTranslate);
  }

  render(){

    let className = this.state.transform ? 'sticky' : 'scrolling sticky';

    return (
      <nav className={className}>
        <IndexLink to="/" activeClassName="active" className="nav-item">HOME</IndexLink>

        <Link to="/skills" activeClassName="active" className="nav-item">SKILLS</Link>

        <Link to="/projects" activeClassName="active" className="nav-item">PROJECTS</Link>

        <Link to="/about" activeClassName="active" className="nav-item">ABOUT ME</Link>

        <Link to="/contact" activeClassName="active" className="nav-item">CONTACT</Link>

        {/* { loading && <LoadingDots interval={ 100 } dots={ 20 }/> } */}
      </nav>
    );
  }
}
{/*
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
*/}
{/*
  Header.propTypes = {
    loading: PropTypes.bool.isRequired
  };
 */}

export default Header;
