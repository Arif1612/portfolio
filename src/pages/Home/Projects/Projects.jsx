import React from "react";
import Container from "../../Container";
import { Helmet } from "react-helmet-async";
import image from "../../../assets/iron-fist.png";
import speedyRiders from "../../../assets/speedy-riders.png";
import newsLetter from "../../../assets/newsLetter.png";
import tastyTrails from "../../../assets/tasty-trails.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mb-10 pt-20 flex justify-center items-center">
      <Helmet>
        <title>Portfolio | Projects </title>
      </Helmet>

      <Container className=" mt-10 mb-10">
        <h5 className="text-4xl text-center  font-bold py-10 text-blue-500">
          PROJECTS
        </h5>

        <div className="grid md:grid-cols-2  grid-cols-1 gap-16 mx-10 md:m-0">
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
              <Link className="hover:text-blue-600 text-xl font-bold"  to="https://github.com/Arif1612/iron-fist">Github Client Link <span className="ml-3 mr-3">|</span>  </Link>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://github.com/Arif1612/iron-fist-server">Github Server Link </Link>
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
              <Link className="hover:text-blue-600 text-xl font-bold"  to="https://github.com/Arif1612/speedy-riders">Github Client Link <span className="ml-3 mr-3">|</span>  </Link>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://github.com/Arif1612/tasty-trails-server">Github Server Link </Link>
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
          tasty trails
          ------------------------------------------ */}
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={tastyTrails} alt="speedy-riders" />
            </figure>
            <div className="card-body">
              
              <h2 className="text-4xl font-bold">Tasty Trails <span className="text-xl font-bold items-center">(May 26, 2023 - May 29, 2023)</span> </h2>
              <p>
              This is a responsive  website based On Indian food recipes
              </p>
             <div>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://tasty-trails-71f0b.web.app/">Live Site   <span className="ml-3">|</span>  </Link> 
              <Link className="hover:text-blue-600 text-xl font-bold"  to="https://github.com/Arif1612/tasty-trails">Github Client Link <span className="ml-3 mr-3">|</span>  </Link>
              <Link className="hover:text-blue-600 text-xl font-bold mr-3"  to="https://github.com/Arif1612/tasty-trails-server">Github Server Link </Link>
             </div>
              
              <p className="text-xl font-bold"></p>
              <p className="text-xl font-bold"> Technologies</p>
              <p>ReactJS, React Router, Firebase, Bootstrap, Express.js, MongoDB, Node.js</p>
              <p className="text-xl font-bold">Features</p>
              

              <ul className="list-disc ms-10">
                <li>Users can authenticate with Google, Github, Email & Password </li>
                <li>Users can select chefs to view all recipes</li>
                <li>Users can mark recipes as their favorites</li>
              </ul>
            </div>
          </div>
          
         
        </div>
      </Container>
    </div>
  );
};

export default Projects;
