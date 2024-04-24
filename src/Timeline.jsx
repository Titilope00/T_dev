import "./Timeline.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (<>
    <h3 className='title'>Timeline</h3>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#fff', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid #000' }}
        date="2019 - Present"
        iconStyle={{
          background: '#f013bc',
          color: '#fff',
          display: 'flex',
          alignItems: 'center', // Align vertically
          justifyContent: 'center', // Align horizontally
        }}
        icon={<i className="bx bx-code-alt"></i>}
      >
        <h3 className="vertical-timeline-element-title">Started Coding</h3>
        <p>Began my journey into the world of programming.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#fff', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid #000' }}
        date="2020 - Present"
        iconStyle={{
          background: '#f013bc',
          color: '#fff',
          display: 'flex',
          alignItems: 'center', // Align vertically
          justifyContent: 'center', // Align horizontally
        }}
        icon={<i className='bx bx-task'></i>}
      >
        <h3 className="vertical-timeline-element-title">Research and Innovation</h3>
        <p>Began my journey into the world of programming.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#fff', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid #000' }}
        date="2015 - Present"
        iconStyle={{
          background: '#f013bc',
          color: '#fff',
          display: 'flex',
          alignItems: 'center', // Align vertically
          justifyContent: 'center', // Align horizontally
        }}
        icon={<i className='bx bx-male-female'></i>}
      >
        <h3 className="vertical-timeline-element-title">Mentorship and Teaching</h3>
        <p>I offer Mentorship/Teaching, guiding, supporting, and empowering future leaders.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#fff', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid #000' }}
        date="2015 - Present"
        iconStyle={{
          background: '#f013bc',
          color: '#fff',
          display: 'flex',
          alignItems: 'center', // Align vertically
          justifyContent: 'center', // Align horizontally
        }}
        icon={<i className='bx bxs-map-pin'></i>}
      >
        <h3 className="vertical-timeline-element-title">Workshops/Webinars</h3>
        <p>Began my journey into the world of programming.</p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    </>
  );
};

export default Timeline;
