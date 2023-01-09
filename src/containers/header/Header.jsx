import React from 'react';
import ai from '../../assets/images/hero-thumb-1.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <p><a href="#">Welcome To RustLabs</a></p>
      <h1 className="gradient__text">Manage it all, in this all new system.</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='ai'/>
    </div>
  </div>
);

export default Header;
