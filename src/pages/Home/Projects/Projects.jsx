import React from "react";
import Container from "../../Container";
import { Helmet } from "react-helmet-async";
import image from "../../../assets/iron-fist.png";
import speedyRiders from "../../../assets/speedy-riders.png";
import newsLetter from "../../../assets/newsLetter.png";
import justice from "../../../assets/justice.png";
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
          {/* iron-fist */}
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={image} alt="iron-fist" />
            </figure>
            <div className="card-body">
              
              <h2 className="text-4xl font-bold">Iron Fist  <span className="text-xl font-bold items-center">(July 11, 2023 - Aug 14, 2023)</span></h2>
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
              <p>ReactJS, HTML, CSS, TailwindCSS, daisyUI, Firebase, MongoDB, Node.js, Express.js, JWT, Stripe,Vercel,VS Code</p>
              <p className="text-xl font-bold">Features</p>
              

              <ul className="list-disc ms-10">
                <li>Only registered users can select their course, visit their dashboard. They can also see their payment history. Students, Instructors & Admin each have a dedicated dashboard</li>
                <li>Instructors Can Add & Manage Their Courses in their dashboard</li>
                <li>Admin can see all the users and switch between admin and instructors</li>
              </ul>
            </div>
          </div>

          {/* --------------------------------------
          speedy-riders
          ------------------------------------------ */}
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={speedyRiders} alt="speedy-riders" />
            </figure>
            <div className="card-body">
              
              <h2 className="text-4xl font-bold">Speedy Riders <span className="text-xl font-bold items-center">(Jun 10, 2023 - Jun 14, 2023)</span> </h2>
              <p>
              A MERN Stack toy vehicles website that sells vehicle related toys
              </p>
             <div>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://speedy-rides.web.app/">Live Site   <span className="ml-3">|</span>  </Link> 
              <Link className="hover:text-blue-600 text-xl font-bold"  to="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Arif1612">Github Client Link <span className="ml-3 mr-3">|</span>  </Link>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Arif1612">Github Server Link </Link>
             </div>
              
              <p className="text-xl font-bold"></p>
              <p className="text-xl font-bold"> Technologies</p>
              <p>ReactJS, HTML, CSS, TailwindCSS, daisyUI, Firebase, MongoDB, Node.js, Express.js, Vercel, VS Code</p>
              <p className="text-xl font-bold">Features</p>
              

              <ul className="list-disc ms-10">
                <li>A shop-by-category section shows data according to the category clicked </li>
                <li>Authentication functionality. Only registered users can add a new toy</li>
                <li>There is a my toy section where you can see all your added toys</li>
              </ul>
            </div>
          </div>
          {/* --------------------------------------
          news-letter
          ------------------------------------------ */}
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={newsLetter} alt="speedy-riders" />
            </figure>
            <div className="card-body">
              
              <h2 className="text-4xl font-bold">News Letter <span className="text-xl font-bold items-center">(Apr 6, 2023 - Apr 7, 2023)</span> </h2>
              <p>
              Convert a file to HTML CSS.
              </p>
             <div>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://arif1612.github.io/newsLetter/">Live Site   <span className="ml-3">|</span>  </Link> 
              <Link className="hover:text-blue-600 text-xl font-bold"  to="https://github.com/Arif1612/newsLetter">Github Link </Link>
             </div>
              
              <p className="text-xl font-bold"></p>
              <p className="text-xl font-bold"> Technologies</p>
              <p>HTML, CSS, VS Code</p>
              <p className="text-xl font-bold">Features</p>
            
              <ul className="list-disc ms-10">
                <li>Responsive</li>
                <li>Custom Fonts and Typography</li>
              </ul>
            </div>
          </div>
          {/* --------------------------------------
          justice
          ------------------------------------------ */}
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={justice} alt="speedy-riders" />
            </figure>
            <div className="card-body">
              
              <h2 className="text-4xl font-bold">Justice <span className="text-xl font-bold items-center">(Feb 23, 2023)</span> </h2>
              <p>
              Convert a figma  file to HTML CSS.
              </p>
             <div>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://legal-house-justices.netlify.app/#">Live Site   <span className="ml-3">|</span>  </Link> 
              <Link className="hover:text-blue-600 text-xl font-bold"  to="https://github.com/Programming-Hero-Web-Course4/b7-legal-house-Arif1612">Github Link </Link>
             </div>
              
              <p className="text-xl font-bold"></p>
              <p className="text-xl font-bold"> Technologies</p>
              <p>HTML, CSS, Bootstrap, VS Code</p>
              <p className="text-xl font-bold">Features</p>
            
              <ul className="list-disc ms-10">
                <li>Responsive</li>
                <li>Custom Fonts and Typography</li>
              </ul>
            </div>
          </div>
         
        </div>
      </Container>
    </div>
  );
};

export default Projects;
