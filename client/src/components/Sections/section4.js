import React from 'react';
import './sections.scss';
import sec4 from '../Assets/DataAnalytics.png';

class Section4 extends React.Component {
  render() {
    return (
      <>
        <div id='sectionFour' className='sectionFour'>
          <div>
            <div className='text-container'>
              <h1>Data Analytics</h1>
              <p className='section'>
                Data analysis is a process of inspecting, cleansing,
                transforming and modeling data with the goal of discovering
                useful information, informing conclusions and supporting
                decision-making. In today's business world, data analysis plays
                a role in making decisions more scientific and helping
                businesses operate more effectively.
              </p>

              <p>
                Data analyis has been particularily adopted in the field of
                medicine and contstruction. Students would be advised to look
                deeper into these industries.
              </p>
            </div>
          </div>
          <div className='img4'>
            <img src={sec4} />
          </div>
        </div>
      </>
    );
  }
}

export default Section4;
