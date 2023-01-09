import React from 'react';
import Article from '../../components/article/Article';
import { refresh, blog05 } from './imports';
import './services.css';

const Blog = () => (
  <div className="gpt3__service section__padding" id="service">
    <div style={{justifyContent:'center', textAlign:'center', marginBottom:'50px'}}>
    <h1>Our Services</h1>
    <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.

</p>
    </div>
    
    <div className="gpt3__service-container">
      <div className="gpt3__service-container_groupB">
      <Article  text="Game development" />
      <Article text="Networking solutions" />
      <Article text="Web & wasm" />
      <Article text="Embedded" />
        <Article text="Terminal user interface" />
        <Article text="Rust adoption" />
      </div>
    </div>
  </div>
);

export default Blog;
