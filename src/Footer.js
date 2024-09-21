import React from 'react';
import img3 from './images/social.png'
// import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer  sm:justify-between md:text-wrap">
      <div className="footer-section">
        <h3>ABOUT</h3>
        <ul>
          <li>Who We Are</li>
          <li>Our Responsibility</li>
          <li>Service We Provide</li>
          <li>Careers</li>
          <li>Legal</li>   
          <li className='ml-12'><img src={img3} /></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CUSTOMER SERVICE</h3>
        <ul>
          <li>Contact Us</li>
          <li>Dispatch Timeline</li>
          <li>Email: info@baroque.pk</li>
          <li>Call: +92 325 700 1111</li>
          <li>WhatsApp: +92 325 7001111</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>POLICIES</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Shipping Policy</li>
          <li>Terms of Service</li>
          <li>Exchange Information</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
