
import './Skill3D.css'; // Import your CSS for styling

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        <div className="skill skill-3d">
          {/* <i className="fab fa-html5 skill-icon"></i>
          <i className="fab fa-css3-alt skill-icon"></i>
          <i className="fab fa-js skill-icon"></i>
          <i className="fab fa-react skill-icon"></i>
          <i className="fab fa-vuejs skill-icon"></i> */}
          <i className='bx bxl-github' ></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bx-envelope'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-telegram'></i>
        <i className='bx bxl-medium'></i>
        </div>
        <div className="skill skill-3d">
        <i className='bx bxl-github' ></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bx-envelope'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-telegram'></i>
        <i className='bx bxl-medium'></i>
          {/* <i className="fas fa-paint-brush skill-icon"></i>
          <i className="fas fa-mobile-alt skill-icon"></i>
          <i className="fas fa-database skill-icon"></i>
          <i className="fas fa-code skill-icon"></i>
          <i className="fas fa-cloud skill-icon"></i> */}
        </div>
        <div className="skill skill-3d">
        <i className='bx bxl-github' ></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bx-envelope'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-telegram'></i>
        <i className='bx bxl-medium'></i>
          {/* <i className="fas fa-server skill-icon"></i>
          <i className="fas fa-terminal skill-icon"></i>
          <i className="fas fa-rocket skill-icon"></i>
          <i className="fas fa-users skill-icon"></i>
          <i className="fas fa-tasks skill-icon"></i> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
