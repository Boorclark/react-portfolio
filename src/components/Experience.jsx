import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {

    return(
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-orange-600 '>Experience</p>
              <p className='py-4'>// This is the full timeline of my tech-related work experience</p>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(234, 88, 12)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(234, 88, 12)' }}
                date="May 2017 - July 2021"
            >
                <h3 className="vertical-timeline-element-title">Computer Technician</h3>
                <h4 className="vertical-timeline-element-subtitle">Paris, Ky - Bourbon County Schools</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(234, 88, 12)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(234, 88, 12)' }}
                date="June 2021 - July 2021"
            >
                <h3 className="vertical-timeline-element-title">Technology Paraeducator</h3>
                <h4 className="vertical-timeline-element-subtitle">Paris, Ky - Bourbon County Schools</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(234, 88, 12)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(234, 88, 12)' }}
                date="August 2021 - May 2022"
            >
                <h3 className="vertical-timeline-element-title">Information Technology Technician</h3>
                <h4 className="vertical-timeline-element-subtitle">Berea, Ky - Berea College</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(234, 88, 12)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(234, 88, 12)' }}
                date="June 2022 - Present"
            >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Berea, Ky - Berea College</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>






    );
};

export default Experience;