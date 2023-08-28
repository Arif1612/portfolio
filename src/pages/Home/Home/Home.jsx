import React from "react";
import { Helmet } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import ParticleBg from "../../components/ParticleBg";
import Container from "../../Container";

const Home = () => {
  return (
   <Container>
     <div >
      <Helmet>
        <title>Portfolio | Home </title>
      </Helmet>
      
        <section>
            <div className="flex text-white">
               {/* left */}
             <div className="w-1/2">
                <h5 className="text-2xl font-bold">Welcome To My World</h5>
                 <h1 className=" text-4xl  font-bold py-3">Hi, I'm <span className="text-6xl text-blue-500">Arif</span></h1>
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
          <div className="w-1/2">
          <p>emage</p>
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
