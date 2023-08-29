import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../Container";

const Skills = () => {
  return (
    <Container>
      <div>
        <Helmet>
          <title>Portfolio | Skills </title>
        </Helmet>

        <div>
          <h5 className="text-4xl text-center md:text-left font-bold py-10 text-blue-500">
            MY SKILLS
          </h5>
          {/* main */}
          <div className="flex flex-col md:flex-row items-center ">
            {/* left */}
            <div className="w-1/2 text-white">
                {/* HTML */}
              <div className="w-10/12 mb-5 " >
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

              <div className="w-10/12 mb-5 " >
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

              <div className="w-10/12 mb-5 " >
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

              <div className="w-10/12 mb-5 " >
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
              <div className="w-10/12 mb-5 " >
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
              <div className="w-10/12 mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    ReactJS
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    80%
                  </span>
                </div>
                <progress className="progress progress-accent" value="80" max="100"></progress>
              </div>

              {/* VS Code */}
              <div className="w-10/12 mb-5 " >
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

              <div className="w-10/12 mb-5 " >
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

            <div className="w-1/2 text-white text-end ">

                  {/* NodeJS */}
              <div className="w-10/12 mb-5 " >
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

              <div className="w-10/12 mb-5 " >
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

              <div className="w-10/12 mb-5 " >
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

              <div className="w-10/12 mb-5 " >
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
              <div className="w-10/12 mb-5 " >
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
              {/* Git */}
              <div className="w-10/12 mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    Git
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    80%
                  </span>
                </div>
                <progress className="progress progress-accent" value="80" max="100"></progress>
              </div>
                 {/* GitHub*/}
                 <div className="w-10/12 mb-5 " >
                <div className="flex items-center justify-between  ">
                  <span className="text-normal font-semibold bg-primary-100 text-primary-700  rounded-full">
                    GitHub
                  </span>
                  <span className="text-normal font-semibold text-primary-600">
                    80%
                  </span>
                </div>
                <progress className="progress progress-accent" value="80" max="100"></progress>
              </div>

              {/* VS Code */}
              <div className="w-10/12 mb-5 " >
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
  );
};

export default Skills;
