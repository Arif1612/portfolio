import React from "react";
import Container from "../../Container";
import { Helmet } from "react-helmet-async";
import image from "../../../assets/iron-fist.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mb-10 pt-20">
      <Helmet>
        <title>Portfolio | Projects </title>
      </Helmet>

      <Container className=" mt-10 mb-10">
        <h5 className="text-4xl text-center md:text-left font-bold py-10 text-blue-500">
          PROJECTS
        </h5>

        <div className="grid md:grid-cols-2  grid-cols-1 gap-10 mx-10 md:m-0">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={image} alt="iron-fist" />
            </figure>
            <div className="card-body">
              
              <h2 className="text-4xl font-bold">Iron Fist</h2>
              <p>
                A MERN Stack martial art website where you can take courses
              </p>
             <div>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://iron-fist-b25fb.web.app/">Live Site   <span className="ml-3">|</span>  </Link> 
              <Link className="hover:text-blue-600 text-xl font-bold"  to="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Arif1612">Github Client Link <span className="ml-3 mr-3">|</span>  </Link>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Arif1612">Github Server Link </Link>
             </div>
              
              <p className="text-xl font-bold"></p>
              <p className="text-xl font-bold"> Technologies</p>
              <p>ReactJS, HTML, TailwindCSS,  Firebase, MongoDB, NodeJS, ExpressJS, JWT, Stripe</p>
              <p className="text-xl font-bold">Features</p>
              

              <ul className="list-disc ms-10">
                <li>Only registered users can select their course, visit their dashboard. They can also see their payment history. Students, Instructors & Admin each have a dedicated dashboard</li>
                <li>Instructors Can Add & Manage Their Courses in their dashboard</li>
                <li>Admin can see all the users and switch between admin and instructors</li>
              </ul>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={image} alt="iron-fist" />
            </figure>
            <div className="card-body">
              <div></div>
              <h2 className="text-4xl font-bold">Iron Fist</h2>
              <p className="text-xl font-bold">Features</p>

              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
