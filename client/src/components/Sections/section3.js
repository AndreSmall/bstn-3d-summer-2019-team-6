import React from "react";
import "./sections.scss";
import graph from '../Assets/eBisAutomation.png';

class Section3 extends React.Component {
  render() {
    return (
      <>
        <div id="sectionThree" className="sectionThree">
          <div className="sectionThree__partone">
          <h1>Automation</h1>
          <p className="section">
            Automation is the technology by which a process or procedure is
            performed with minimal human assistance. Automation or automatic
            control is the use of various control systems for operating
            equipment such as machinery, processes in factories, boilers and
            heat treating ovens, switching on telephone networks, steering and
            stabilization of ships, aircraft and other applications and vehicles
            with minimal or reduced human intervention. Automation will be
            impacting many jobs in the next 10 years for Canada and should be
            looked at by students as a field to pursue.
          </p>            
          </div>
          <div className="sectionThree__parttwo">
            <img src={graph}></img>
          </div>

          
        </div>
      </>
    );
  }
}

export default Section3;
