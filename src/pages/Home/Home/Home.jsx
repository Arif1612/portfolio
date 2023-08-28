import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import Container from "../../Container";
import img from '../../../assets/portfolio5.png'
const Home = () => {
  return (
   <Container>
     <div >
      <Helmet>
        <title>Portfolio | Home </title>
      </Helmet>
      
        <section>
          {/* main div */}
            <div className="flex flex-col md:flex-row text-white ">
               {/* left */}
             <div className="w-1/2 mt-10">
                <h5 className="text-3xl font-bold ">Welcome To My World</h5>
                 <h1 className=" text-4xl  font-bold pt-3 pb-6">Hi, I'm <span className="text-6xl text-blue-500">Arif</span></h1>
                 <div className="text-4xl font-bold">
                      <Typewriter 
                        options={{
                          strings: ['a BSCSE Graduate', 'a MERN Stack Developer','a Tech Enthusiast', 'a Believer of Allah'],
                          autoStart: true,
                          loop: true,
                        }}
                       
                      />
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
  );
};

export default Home;
