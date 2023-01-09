import React from 'react';
import ai from '../../assets/images/hero-thumb-1.jpg';
import './getintouch.css';

const Header = () => (
  <div className="gpt3__touch section__padding" id="home">
    <div className="gpt3__touch-content">
    <h2>Get in touch</h2>  
    <p>Looking for help? Fill the form.</p>
    <h4>Address</h4>
    <h6>Pune, Maharashtra, India.</h6>

    <h4>Phone</h4>
    <h6>(+91) 123 456 7890</h6>

    <h4>Support</h4>
    <h6>info@rustlabs.com</h6>

    <h4>Follow Us</h4>
    </div>

    <div className="gpt3__touch-image">
      <div>
        <h2>Let’s Connect</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
        <div className="gpt3__header-content__input">
        <input type="firstname" placeholder="First Name" />&nbsp;&nbsp;
        <input type="lastname" placeholder="Last Name" />
      </div>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Email Address" />&nbsp;&nbsp;
        <input type="phonenumber" placeholder="Phone Number" />
      </div>
      <div className="gpt3__header-content__input">
        <input type="subject" placeholder="Subject" />
      </div>
      <div className="gpt3__header-content__input">
        <input type="how_can_we_help" placeholder="How can we help?" />
      </div>
      </div>
     <div>

     </div>
    </div>
  </div>
);

export default Header;
