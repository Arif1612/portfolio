import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBg from '../../components/ParticleBg';
import Container from '../../Container';

const Projects = () => {
    return (
        <div>
           <Container>
                <div >
                <Helmet>
                <title>Portfolio | Projects </title>
               </Helmet>
                <section>
                <h5 className="text-4xl text-center md:text-left font-bold py-10 text-blue-500">
                    PROJECTS
                </h5>
                </section>
            </div>
             </Container>
        </div>
    );
};

export default Projects;