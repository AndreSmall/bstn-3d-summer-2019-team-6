import React from "react";
import "./sections.scss";
import graph from "../Assets/Top -7-ICTs.png";

class Section2 extends React.Component {
  render() {
    return (
      <>
        <div id="sectionTwo" className="sectionTwo">
          <h1>Top 7 ICT's</h1>
          <p className="section">
            This dataset contains the responses to a survey measuring the
            adoption and use of various digital technologies by Canadian
            businesses, such as use of the internet, use of information and
            communications technologies (ICTs), use of government services
            online, various barriers and impacts, as well as ICT training and
            security practices.
          </p>
          <div>
            <img src={graph} />
          </div>
        </div>
      </>
    );
  }
}

export default Section2;
