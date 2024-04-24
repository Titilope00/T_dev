
import './Footer.css'; // Import your CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Tidev. All rights reserved.</p>
        <div className="icon">
        <i className='bx bxl-github' ></i>
        <i className='bx bxl-whatsapp'></i>
        <i className='bx bx-envelope'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-telegram'></i>
        <i className='bx bxl-medium'></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
