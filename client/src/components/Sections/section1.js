import React from 'react';
import './sections.scss';

class Section1 extends React.Component {
  render() {
    return (
      <>
        <div id='sectionOne' className='sectionOne'>
          <h1>Digital Technology</h1>
          <p className='section'>
            The adoption of digital technology is transforming the world. When
            entering the workforce it’s important to understand the marketplace
            and the influences on industry.
          </p>
        </div>
      </>
    );
  }
}

export default Section1;
