import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import Container from "../../Container";
import img from '../../../assets/portfolio5.png';
import { BsFacebook,BsGithub } from 'react-icons/bs';

import { Link } from "react-router-dom";
import About from "../About/About";
const Home = () => {
  return (
   <Container>
     <div >
      <Helmet>
        <title>Portfolio | Home </title>
      </Helmet>

      <About ></About>
      
       
    </div>
   </Container>
  );
};

export default Home;
