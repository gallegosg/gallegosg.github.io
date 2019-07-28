import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import '../styles/Contact.css'

const Contact = () => (
  <div>
    <div className="contact">
      <p className='tab-title'>Contact</p>
      <div className="title-bar-white" />
      <div className="contact-items">
        <a href='https://github.com/gallegosg' className='link-icon'>
          <FaGithub size={40} />
        </a>
        <a href='https://www.linkedin.com/in/gerardo-gallegos-04183a149/' className='link-icon'>
          <FaLinkedinIn className='link-icon' size={40} />
        </a>
        <a href='mailto:gallegosg13@gmail.com' className='link-icon'>
          <FaEnvelope className='link-icon' size={40} />
        </a>
      </div>
      
    </div>
  </div>
);

export default Contact;
