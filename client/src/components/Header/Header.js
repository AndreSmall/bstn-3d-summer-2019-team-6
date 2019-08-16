import React from 'react';
import './Header.scss';
import logo from '../Assets/logo.svg';
import img from '../FLDistribution.png';
class Header extends React.Component {
  state = {
    isOpen: true
  };
  componentDidMount() {
    window.onscroll = this.scrollFunction;
  }
  scrollFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      console.log('shrinking');
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
    console.log('testing');
  };

  render() {
    return (
      <>
<<<<<<< HEAD
        <div
          id='navbar'
          className={`header ${this.state.isOpen ? 'opened' : 'shrinked'}`}
          onScroll={this.scrollFunction}
        >
          {/* <img  className="logo" src={logo} alt="logopic"></img> */}
          <ul className='header__buttons'>
            <li className='header__buttons--one'>
              <a href='#sectionOne'>section one</a>
            </li>
            <li className='header__buttons--two'>
              <a href='#sectionTwo'>section two</a>
            </li>
            <li className='header__buttons--three'>
              <a href='#sectionThree'>section three</a>
            </li>
            <li className='header__buttons--four'>
              <a href='#sectionFour'>section four</a>
            </li>
          </ul>
        </div>
=======
      
      <div id="navbar" className={`header ${this.state.isOpen ? 'opened' : 'shrinked'}`} onScroll={this.scrollFunction}>
        {/* <img  className="logo" src={logo} alt="logopic"></img> */}
        <div className={`partOne ${this.state.isOpen ? 'iconLarge' : 'iconSmall'}`}><img src={logo} alt="logo"></img></div>
        <ul className="header__buttons">
          <li className="header__buttons--one"><a href="#sectionOne">Home</a></li>
          <li className="header__buttons--two"><a href="#sectionTwo">Automation</a></li>
          <li className="header__buttons--three"><a href="#sectionThree">Cloud</a></li>
          <li className="header__buttons--four"><a href="#sectionFour">Data</a></li>
        </ul>
      </div>

>>>>>>> 3b94100a5a1164fbdf8118236e9a2b7e419a7e84
      </>
    );
  }
}

export default Header;
