
//             I thrive on turning complex ideas into intuitive user experiences <br /> that captivate users and drive engagement

import './Contact.css';

// const color= {
//   color: "#f013bc",
// }
// const inputWidth ={
//   margin: "14px",
// }

// const secondWidth= {
//   margin: "10px",
// }

// style={inputWidth} 
// style={secondWidth}

// const cube_1 = [
//   image: "./handshake.gif",
// ]

const Contact = () => {
  return (
    <>
    <h2 className='title'>Contact Me</h2>
    <div className="contact-container">
      <div className="contact-content">
        
        <p>Feel free to get in touch with me!</p>
       
        <form>
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email" className="required-label" >Email</label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="message" className="required-label1">Message</label> */}
          <textarea
            id="message"
            name="message"
            placeholder="Drop a message"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <div className="icon">
        <i className='bx bxl-github' ></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bx-envelope'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-telegram'></i>
        <i className='bx bxl-medium'></i>
        </div>
      </form>
      </div>
      <div className="contact-model">
      <div className="cube">
          <div className="front"> sure Dev</div>
          <div className="back">Top notch</div>
          <div className="top">Tenacious</div>
          <div className="bottom">Available</div>
          <div className="left">Experience</div>
          <div className="right">Professional</div>
        </div>

      </div>
    </div>

    

    </>
      );
};

export default Contact;
