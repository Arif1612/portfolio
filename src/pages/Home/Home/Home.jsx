import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import Container from "../../Container";
import img from '../../../assets/portfolio5.png';
import { BsFacebook,BsGithub } from 'react-icons/bs';

import { Link } from "react-router-dom";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
 
     <div >
      <Helmet>
        <title>Portfolio | Home </title>
      </Helmet>

      <About ></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      
      
       
    </div>
  
  );
};

export default Home;
