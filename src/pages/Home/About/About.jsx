import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import Container from "../../Container";
import img from '../../../assets/portfolio5.png';
import { BsFacebook,BsGithub,BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="mb-10 pt-20 flex justify-center items-center">

        <Container>
            <div >
            <Helmet>
                <title>Portfolio | About </title>
            </Helmet>
            
            <section>
          {/* main div */}
            <div className="grid md:grid-cols-2 items-center grid-cols-1 gap-4 mx-10 md:m-0 text-white ">
               {/* left */}
             <div className="w-full mt-10 mr-5  ">
                <h5 className="text-3xl font-bold ">Welcome To My World</h5>
                 <h1 className=" text-4xl  font-bold pt-2 pb-4">Hi, I'm <span className="text-6xl text-blue-500">Arif</span></h1>
                 <div className="text-4xl font-bold ">
                      <Typewriter 
                        options={{
                          strings: ['a BSCSE Graduate', 'a MERN Stack Developer','a Tech Enthusiast'],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                  </div>

                  <p className="my-6"> Earned a Bachelor's degree in Computer Science. I am looking for a job as a MERN stack developer. I have vast experience in HTML5, CSS3, Bootstrap, tailwindCSS, JavaScript, Fetch API, ReactJS, Node.js, Express.js, Firebase and MongoDB.  I like to develop myself with new technologies. I am waiting to work with you. Feel free to contact me for any web development related task. Thank You.</p>

                  <div>
                  <h5 className="text-3xl font-bold  text-blue-500  mt-8 mb-3">CATCH ME ON </h5> 
                  <div className="text-4xl flex">
                    <p className="mr-5 hover:text-blue-500"><Link to="https://www.linkedin.com/in/mdarifulislam45/"> <BsLinkedin></BsLinkedin> </Link></p>
                    <p className="mr-5 hover:text-blue-500"><Link to="https://www.facebook.com/arifulislam.sumon.1029/"> <BsFacebook></BsFacebook></Link></p>
                    <p className="hover:text-blue-500" ><Link to="https://www.facebook.com/arifulislam.sumon.1029/"> <BsGithub ></BsGithub> </Link></p>
                  </div>
                  </div>
             
            
                  
            </div>
            {/* left div end */}
           {/* right */}
          <div className="w-full mt-10">
          <img src={img} className="rounded-xl" alt="" />
          </div>
          {/* right end */}

        </div>
        {/* main end */}
        </section>
            </div>
        </Container>
        
        </div>
    );
};

export default About;