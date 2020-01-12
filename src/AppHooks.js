import React, { useEffect, useState } from "react";
import Home from './tabs/Home'
import Contact from './tabs/Contact'
import About from './tabs/About'
import Work from './tabs/Work'
import { Link, Element } from 'react-scroll'
import { db, auth, app } from './firebase'
import "./App.css";

const App = () => {
  const [projects, setProjects] = useState({})
  const [about, setAbout] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const authenticate = () => {
    setLoading(true)
    auth.signInAnonymously().catch(() => {
      setLoading(false)
      setError(true)
    });
  }

  useEffect(() => authenticate(), [])

  useEffect(() => {
    if(error) app.delete().then();
  }, [error])

  auth.onAuthStateChanged(function(user) {
    if (user) {
      getProjects()
    }
  });

  const getProjects = async () => {
    try {
      const querySnapshot = await db.collection("projects").orderBy('order', 'asc').get()
      const newProjects = querySnapshot.docs.map(doc => doc.data());
      const newAbout = await getAbout();
      setProjects(newProjects)
      setAbout(newAbout)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(true)
    }
  }

  const getAbout = async () => {
    try {
      const querySnapshot = await db.collection("about").get()
      const newAbout = querySnapshot.docs.map(doc => doc.data())[0].title;
      return newAbout;
    } catch (err) {
      setLoading(false)
      setError(true)
      throw new Error('Failed to get about')
    }
  }

  if(loading) {
    return (
      <div className="loader-container">
        <div className="loader" />
      </div>
    )
  }else if(error) {
    return (
      <div className="loader-container">
        <h1>¯\(°_o)/¯</h1>
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

export default App;