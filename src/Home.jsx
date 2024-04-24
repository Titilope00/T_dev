import "./Navbar.css"
import downloadImage from "./download.gif"
import cubeImage from "./boss lady.png"
// import homeImg from "./black female  3494dafd-a49f-48fc-9541-a94802355fcf.png"

function Home(){
  const color= {
    color: "#f013bc",
    fontSize: "26px",
  }

  const color1= {
    color: "#f013bc",
    fontSize: "18px",
  }

    return(
        <>

    <section className= "section">
        <div className="icons">
        <i className='bx bxl-github' ></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bx-envelope'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-telegram'></i>
        <i className='bx bxl-medium'></i>
        </div>

        {/* <div className="desc-model"> */}
        <div className="contact-model">
        
        
        <div className="contact-model">
  <div className="cube" style={{position: "relative", width: "200px", height: "200px", perspective: "1000px"}}>
    <div className="front" style={{position: "absolute", width: "200px", height: "200px", transform: "translateZ(100px)"}}>
      <img src={cubeImage} alt="" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%", maxHeight: "100%", borderRadius: "50%"}} />
    </div>
    <div className="back" style={{position: "absolute", width: "200px", height: "200px", transform: "rotateY(180deg) translateZ(100px)"}}>
      <img src={cubeImage} alt="" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%", maxHeight: "100%", borderRadius: "50%"}} />
    </div>
    <div className="top" style={{position: "absolute", width: "200px", height: "200px", transform: "rotateX(90deg) translateZ(100px)"}}>
      <img src={cubeImage} alt="" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%", maxHeight: "100%", borderRadius: "50%"}} />
    </div>
    <div className="bottom" style={{position: "absolute", width: "200px", height: "200px", transform: "rotateX(-90deg) translateZ(100px)"}}>
      <img src={cubeImage} alt="" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%", maxHeight: "100%", borderRadius: "50%"}} />
    </div>
    <div className="left" style={{position: "absolute", width: "200px", height: "200px", transform: "rotateY(-90deg) translateZ(100px)"}}>
      <img src={cubeImage} alt="" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%", maxHeight: "100%", borderRadius: "50%"}} />
    </div>
    <div className="right" style={{position: "absolute", width: "200px", height: "200px", transform: "rotateY(90deg) translateZ(100px)"}}>
      <img src={cubeImage} alt="" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%", maxHeight: "100%", borderRadius: "50%"}} />
    </div>
  </div>
</div>


        
      </div>

        <div className="text">
          <h5>
            Hi, I am Titilope, <br /> a <span style={color}> React Frontend developer </span>with a flair for <br /> crafting elegant responsive web applications.
          </h5>
          <h6> I bring creativity and innovation to every project, <br /> delivering robust solutions. <br /> Let us <span style={color1}> build</span> something amazing together.</h6>
          <div className="buttons">
          <button className="btn1">Hire Me</button>
          <button className="btn2"><img className="downloadImage" src={downloadImage} />Download my CV</button>
       
          </div>
          </div>
        {/* </div> */}
     

    </section>

</>
    )
}
export default Home;

