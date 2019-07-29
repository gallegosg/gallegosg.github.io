import React from "react";
import '../styles/About.css'

const About = ({about}) => (
  <div className="about">
    <p className='tab-title'>About</p>
    <div className="title-bar-white" />
    {about && <span>{about}</span>}
  </div>
);

export default About;
