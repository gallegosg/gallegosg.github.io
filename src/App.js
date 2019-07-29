import React, { Component } from "react";
import Home from './tabs/Home'
import Contact from './tabs/Contact'
import About from './tabs/About'
import Work from './tabs/Work'
import { Link, Element } from 'react-scroll'
import { db } from './firebase'
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      projects: {},
      about: '',
      loading: true
    };
  };
  
  componentWillMount = () => {
    this.getProjects();
  };

  getProjects = async () => {
    try {
      const querySnapshot = await db.collection("projects").orderBy('order', 'asc').get()
      const projects = querySnapshot.docs.map(doc => doc.data());
      const about = await this.getAbout();
      this.setState({projects, about, loading: false})
    } catch (err) {
      console.log(err)
    }
  }

  getAbout = async () => {
    try {
      const querySnapshot = await db.collection("about").get()
      const about = querySnapshot.docs.map(doc => doc.data())[0].title;
      return about;
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    const { projects, about, loading } = this.state;

    if(loading) {
      return (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )
    }

    return(
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
          <Link to="contact" id={"contact"} smooth={true} duration={1500}>
            <p>Contact</p>
          </Link>
        </Element>
        <Home />
        <Element name="about">
          <About about={about}/>
        </Element>
        <Element name="work">
          <Work projects={projects}/>
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <p id="sign">Made by Gerardo Gallegos 2019</p>
      </div>
    )
  }
}