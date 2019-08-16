import React from 'react';
import './sections.scss';
import sec3 from '../Assets/CloudComputing.png';

class Section3 extends React.Component {
  render() {
    return (
      <>
        <div id='sectionThree' className='sectionThree'>
          <div>
            <img src={sec3} />
          </div>
          <div className='section'>
            <h1>Cloud Computing</h1>
            <p>
              Cloud computing is the delivery of computing services over the
              Internet to offer faster innovation and flexible resources. Some
              of these services include servers, storage, databases, networking,
              software, analytics and intelligence Cloud computing is a big
              shift from the traditional way businesses think about IT
              resources. Cloud services are popular because it helps lower your
              operating costs, run infrastructure more efficiently and scale as
              your business needs change. Students would be advised to look
              deeper in cloud computing because of its popularity.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Section3;
