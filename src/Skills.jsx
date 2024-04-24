import "./Skills.css"

const color = {
  color: "white",
}

const SkillSection = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="title">My Skills</h2>
        <div className="skill-circle">

        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxl-html5'></i></div>
              </div>
              <h2>HTML5</h2>
              <p>projects by students</p>
            </div>
          </div>
        </div>
          
          
        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxl-css3'></i></div>
              </div>
              <h2>CSS</h2>
              <p>projects by students</p>
            </div>
          </div>
        </div>
        
        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxl-javascript'></i></div>
              </div>
              <h2>Javascript</h2>
              <p>projects by students</p>
            </div>
          </div>
        </div>
        
        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxl-react'></i></div>
              </div>
              <h2>React</h2>
              <p>projects by students</p>
            </div>
          </div>
        </div>
        
        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxl-git'></i></div>
              </div>
              <h2>Git</h2>
              <p>(version control)</p>
            </div>
          </div>
        </div>
        
        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxs-color'></i></div>
              </div>
              <h2>UI Designs</h2>
              <p>projects by students</p>
            </div>
          </div>
        </div>
        
        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxs-edit-alt'></i></div>
              </div>
              <h2>Documentation</h2>
              <p>projects by students</p>
            </div>
          </div>
        </div>
        
        <div className="project-3d">
        <div className="project-content" style={color}>
            <div className="project-info">
              <div className="circle">
                <div className="inner-circle"><i className='bx bxs-component'></i></div>
              </div>
              <h2>Team work</h2>
              <p>projects by students</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default SkillSection;


// import PropTypes from 'prop-types';



// const Project3D = () => {
//   return (

//   );
// };

// Project3D.propTypes = {
//   id: PropTypes.number.isRequired,
//   bgColor: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
// };
