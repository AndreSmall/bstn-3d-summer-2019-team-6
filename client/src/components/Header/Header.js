import React from 'react';
import './Header.scss';
class Header extends React.Component {
  render() {
    return (
      <>
        <div className='header'>
          <ul className='buttons'>
            <li>
              <a href='#one'>section one</a>
            </li>
            <li>
              <a href='#two'>section two</a>
            </li>
            <li>
              <a href='#three'>section three</a>
            </li>
            <li>
              <a href='#four'>section four</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;
