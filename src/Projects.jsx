import { useState, useEffect } from 'react';
import './Projects.css';
import Images from './/pixlr-image-generator-15053b1c-393c-443a-9ffd-f847c6119bec.png'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <h3 className='title'>Projects</h3>
     <section className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="project-card fade-in">
        <img src={Images} alt="Project 1" />
        <div className="project-details">
          <h3>Propclicks</h3>
          <p>A real estate website that help people in finding a perfect home.</p>
          <a href="#">View Details</a>
        </div>
      </div>
      <div className="project-card fade-in">
        <img src={Images} alt="Project 1" />
        <div className="project-details">
          <h3>Zee e-commerce</h3>
          <p>A one-stop shop for all male and female costumes.</p>
          <a href="#">View Details</a>
        </div>
      </div>
      <div className="project-card fade-in">
        <img src={Images} alt="Project 1" />
        <div className="project-details">
          <h3>Crack the code</h3>
          <p>A game for kids to boost their memory muscles of numbers.</p>
          <a href="#">View Details</a>
        </div>
      </div>
      <div className="cta-button">
        <a href="#contact">Explore More</a>
      </div>
    </section>

    </>
     );
};

export default Projects;
