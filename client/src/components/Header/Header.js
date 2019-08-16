import React from "react";
import './Header.scss';
import logo from '../Assets/logo.svg';
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
        <ul className="buttons">
          <li><a href="#one">section one</a></li>
          <li><a>section two</a></li>
          <li><a>section three</a></li>
          <li><a>section four</a></li>
          
        </ul>
      </div>

      </>
    )
  }
}

export default Header;