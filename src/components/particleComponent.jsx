import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import Navbar from "../Navbar";
import { loadSlim } from "@tsparticles/slim"; 
// import Home from "../Home";
// import Contact from "../Contact";
// import  Skills from "../Skills";
// import Projects from "../Projects";


const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
   
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: false,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#f013bc",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1.4,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div>
        <Particles  id={props.id} init={particlesLoaded} options={options} />
        {/* <Navbar /> 
        <Home/>
        <Contact/>
        <Projects/>
        <Skills/> */}
    </div>
  )
};

export default ParticlesComponent;