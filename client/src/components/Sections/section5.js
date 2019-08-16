import React from "react";
import "./sections.scss";
import graph from "../Assets/Data.png";

class Section5 extends React.Component {
  render() {
    return (
      <>
        <div id="sectionFive" className="sectionThree">
          <div className="sectionThree__partone">
            <h1>Data Analytics</h1>
            <p className="section">
              Data analysis is a process of inspecting, cleansing, transforming
              and modeling data with the goal of discovering useful information,
              informing conclusions and supporting decision-making. In today's
              business world, data analysis plays a role in making decisions
              more scientific and helping businesses operate more effectively.
              Data analyis has been particularily adopted in the field of
              medicine and contstruction. Students would be advised to look
              deeper into these industries.
            </p>
          </div>
          <div className="sectionFive__parttwo">
            <img src={graph} />
          </div>
        </div>
      </>
    );
  }
}
export default Section5;