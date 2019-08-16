import React from 'react';
import './App.css';
import graph from '../FLDistribution.png';
import Section1 from '../Sections/section1';
import Section2 from '../Sections/section2';
import Section3 from '../Sections/section3';
import Section4 from '../Sections/section4';
import Header from '../Header/Header';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </>
    );
  }
}

export default App;
