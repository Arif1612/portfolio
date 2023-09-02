import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../Container";

const Skills = () => {
  return (
   <div className="mb-10 pt-20 ">
     <Container>
      <div>
        <Helmet>
          <title>Portfolio | Skills </title>
        </Helmet>

        <div>
          <h5 className="text-4xl text-center  font-bold py-10 text-blue-500 ">
            MY SKILLS
          </h5>
          {/* main */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-40 mx-10 md:m-0 ">
            {/* left */}
            <div className=" text-white">
                {/* HTML */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    HTML
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    95%
                  </span>
                </div>
                <progress className="progress progress-accent " value="95" max="100"></progress>
              </div>
              {/* HTML END */}

              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    CSS
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    90%
                  </span>
                </div>
                <progress className="progress progress-accent" value="90" max="100"></progress>
              </div>
              {/* css end */}

              {/* bootstrap */}

              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Bootstrap
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    90%
                  </span>
                </div>
                <progress className="progress progress-accent" value="90" max="100"></progress>
              </div>

              {/* tailwind */}

              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    95%
                  </span>
                </div>
                <progress className="progress progress-accent" value="90" max="100"></progress>
              </div>

              {/* JavaScript */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    JavaScript
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    80%
                  </span>
                </div>
                <progress className="progress progress-accent" value="80" max="100"></progress>
              </div>
              {/* ReactJS */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    ReactJS
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    90%
                  </span>
                </div>
                <progress className="progress progress-accent" value="80" max="100"></progress>
              </div>

              {/* VS Code */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    TypeScript
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    50%
                  </span>
                </div>
                <progress className="progress progress-accent" value="50" max="100"></progress>
              </div>

              {/* Redux */}

              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Redux
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    50%
                  </span>
                </div>
                <progress className="progress progress-accent" value="50" max="100"></progress>
              </div>

            </div>

            {/* ---------------------------------
            RIGHT 
            --------------------------------*/}

            <div className=" text-white text-end ">

                  {/* NodeJS */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Node.js
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    70%
                  </span>
                </div>
                <progress className="progress progress-accent " value="70" max="100"></progress>
              </div>
              {/* ExpressJS  */}

              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Express.js
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    70%
                  </span>
                </div>
                <progress className="progress progress-accent" value="70" max="100"></progress>
              </div>
             

              {/* NextJS */}

              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Next.js
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    50%
                  </span>
                </div>
                <progress className="progress progress-accent" value="90" max="100"></progress>
              </div>

              {/* MySQL */}

              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    MySQL
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    50%
                  </span>
                </div>
                <progress className="progress progress-accent" value="50" max="100"></progress>
              </div>

              {/* MongoDB */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    MongoDB
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    70%
                  </span>
                </div>
                <progress className="progress progress-accent" value="70" max="100"></progress>
              </div>
              {/* Firebase */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Firebase
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    90%
                  </span>
                </div>
                <progress className="progress progress-accent" value="90" max="100"></progress>
              </div>
                 {/* GitHub*/}
                 <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    GitHub
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    90%
                  </span>
                </div>
                <progress className="progress progress-accent" value="80" max="100"></progress>
              </div>

              {/* VS Code */}
              <div className=" mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    VS Code
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    95%
                  </span>
                </div>
                <progress className="progress progress-accent" value="95" max="100"></progress>
              </div>

           

            </div>

          </div>
        </div>
      </div>
    </Container>
   </div>
  );
};

export default Skills;
