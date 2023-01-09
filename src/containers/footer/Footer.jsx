import React from 'react';
import gpt3Logo from '../../assets/images/logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
     
      </div>
      <div className="gpt3__footer-links_div" style={{justifyContent:"flex-end"}}>
        <h4>Company</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Services</h4>
        <p>Game development</p>
        <p>Networking solutions</p>
        <p>Web & wasm</p>
        <p>Embedded</p>
        <p>Terminal user interface</p>
        <p>Rust adoption</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>support@rustlabs.com</p>
        <p>+(91) 123 456 7890</p>
        <p>Pune, Maharashtra, India.</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>Copyright © 2022 RustLabs. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
