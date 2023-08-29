import React from "react";
import Container from "../../Container";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <div className="mb-10 pt-40 md:pt-20">
      <Helmet>
        <title>Portfolio | Projects </title>
      </Helmet>

      <Container className=" mt-10 mb-10" >
      <h5 className="text-4xl text-center md:text-left font-bold py-10 text-blue-500">  Projects </h5>
      
           <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-10 md:m-0">
            
           
           </div>
      </Container>
    </div>
  );
};

export default Projects;