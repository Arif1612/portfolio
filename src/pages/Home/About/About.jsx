import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import Container from "../../Container";
import img from '../../../assets/portfolio5.png';
import { BsFacebook,BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="mb-10">

        <Container>
            <div >
            <Helmet>
                <title>Portfolio | About </title>
            </Helmet>
            
            <section>
          {/* main div */}
            <div className="flex flex-col md:flex-row text-white items-center ">
               {/* left */}
             <div className="w-1/2 mt-10 mr-5">
                <h5 className="text-3xl font-bold ">Welcome To My World</h5>
                 <h1 className=" text-4xl  font-bold pt-2 pb-5">Hi, I'm <span className="text-6xl text-blue-500">Arif</span></h1>
                 <div className="text-4xl font-bold ">
                      <Typewriter 
                        options={{
                          strings: ['a BSCSE Graduate', 'a MERN Stack Developer','a Tech Enthusiast', 'a Believer of Allah'],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                  </div>

                  <p className="my-6"> I am Md. Arif Ul Islam. Earned a Bachelor's degree in Computer Science. I am looking for a job as a MERN stack developer. I have vast experience in HTML5, CSS3, Bootstrap, Tailwind, JavaScript, Fetch API, ReactJS, NodeJS, ExpressJS, Firebase and MongoDB.  I like to develop myself with new technologies. I am waiting to work with you. Feel free to contact me for any web development related task. Thank You.</p>

                  <div>
                  <h5 className="text-3xl font-bold  text-blue-500  mt-8 mb-3">Catch me on </h5> 
                  <div className="text-4xl flex">
                    <p className="mr-5"><Link to="https://www.facebook.com/arifulislam.sumon.1029/"> <BsFacebook></BsFacebook></Link></p>
                    <p><Link to="https://www.facebook.com/arifulislam.sumon.1029/"> <BsGithub></BsGithub> </Link></p>
                  </div>
                  </div>
             
            
                  
            </div>
            {/* left div end */}
           {/* right */}
          <div className="w-1/2 mt-10">
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