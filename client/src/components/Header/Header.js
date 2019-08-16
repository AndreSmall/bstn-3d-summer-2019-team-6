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
        <div
          id='navbar'
          className={`header ${this.state.isOpen ? 'opened' : 'shrinked'}`}
          onScroll={this.scrollFunction}
        >
          {/* <img  className="logo" src={logo} alt="logopic"></img> */}
          <div
            className={`partOne ${
              this.state.isOpen ? 'iconLarge' : 'iconSmall'
            }`}
          >
            <img src={logo} alt='logo' />
          </div>
          <ul className='header__buttons'>
            <li className='header__buttons--one'>
              <a href='#sectionOne'>Home</a>
            </li>
            <li className='header__buttons--two'>
              <a href='#sectionTwo'>Automation</a>
            </li>
            <li className='header__buttons--three'>
              <a href='#sectionThree'>Cloud</a>
            </li>
            <li className='header__buttons--four'>
              <a href='#sectionFour'>Data</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;
