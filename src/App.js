import React from "react";
import Home from './tabs/Home'
import Contact from './tabs/Contact'
import About from './tabs/About'
import Work from './tabs/Work'
import { Link, Element } from 'react-scroll'

import "./App.css";

const App = () => (
  <div className='container'>
    <Element name="home" className="topnav">
      <Link to="home" id={"home"} smooth={true} duration={500}>
        <p>Home</p>
      </Link>
      <Link to="about" id={"about"} smooth={true} duration={600}>
        <p>About</p>
      </Link>
      <Link to="work" id={"work"} smooth={true} duration={800}>
        <p>Projects</p>
      </Link>
      <Link to="contact" id={"contact"} smooth={true} duration={1000}>
        <p>Contact</p>
      </Link>
    </Element>
      
    <Home />
    <Element name="about">
      <About />
    </Element>
    <Element name="work">
      <Work />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
    <p id="sign">Made by Gerardo Gallegos 2019</p>
  </div>
);

export default App;
