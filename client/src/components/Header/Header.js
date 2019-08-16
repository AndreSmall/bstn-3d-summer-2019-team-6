import React from "react";
import './Header.scss';
import logo from '../Assets/logo.svg';
import img from '../FLDistribution.png';
class Header extends React.Component {
  componentDidMount(){
    window.onScroll =  this.scrollFunction();
  }


scrollFunction = () =>{
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
  }
}
  render(){
    return (
      <>
      <div id="navbar" className="header">
        {/* <img  className="logo" src={logo} alt="logopic"></img> */}
        <ul className="header__buttons">
          <li className="header__buttons--one"><a href="#sectionOne">section one</a></li>
          <li className="header__buttons--two"><a href="#sectionTwo">section two</a></li>
          <li className="header__buttons--three"><a href="#sectionThree">section three</a></li>
          <li className="header__buttons--four"><a href="#sectionFour">section four</a></li>
        </ul>
        <iframe src={img}></iframe>
      </div>

      </>
    )
  }
}

export default Header;