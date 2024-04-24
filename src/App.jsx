import ParticlesComponent from "./components/particleComponent"
import Navbar from "./Navbar";
import "./App.css"
import Home from "./Home";
import Contact from "./Contact.jsx"
// import CircularArrangement from "./Skill3D.jsx"
import  Skills from "./Skills.jsx"
import Projects from "./Projects";
import Footer from "./Footer.jsx"
import Timeline from "./Timeline.jsx";

function App(){
    return(
      <div className = "App">
    
        <ParticlesComponent id="particles" />
        <div className="components">
           <Navbar />
           <Home/>
           <Timeline/>
           {/* <CircularArrangement/> */}
           <Projects/>
           <Skills/>
           <Contact/>
           <Footer/>
        </div>

       </div>
    );
  }
  
  export default App
  // id="navbar"