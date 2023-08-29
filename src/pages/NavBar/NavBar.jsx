import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { FaBeer } from "react-icons/fa";


const Navbar = () => {
 
  return (
    <div className="navbar   bg-gray-200 text-black">
      <div className="navbar-start">

        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden bg-neutral text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm flex flex-col dropdown-content  p-2 shadow bg-base-300 rounded-box w-60 text-center text-black absolute top-0 z-10 font-semibold"
          >
            <Link
              to="/"
              className="  mx-5 hover:bg-gray-600  text-base  hover:text-white p-2 rounded-lg"
            >
              HOME
            </Link>

            <Link
              to="/about"
              className="  mx-5 hover:bg-gray-600  text-base  hover:text-white p-2 rounded-lg"
            >
              ABOUT
            </Link>
            <Link
              to="/education"
              className="  mx-5 hover:bg-gray-600  text-base  hover:text-white p-2 rounded-lg"
            >
              EDUCATION
            </Link>

            <Link
              to="/skills"
              className="  mx-5 hover:bg-gray-600  text-base  hover:text-white p-2 rounded-lg"
            >
              SKILLS
            </Link>
            <Link
              to="/projects"
              className="  mx-5 hover:bg-gray-600  text-base  hover:text-white p-2 rounded-lg"
            >
               PROJECTS
            </Link>
           
            <Link
              to="/resume"
              className="  mx-5 hover:bg-gray-600  text-base  hover:text-white p-2 rounded-lg"
            >
              RESUME
            </Link>
            {/* <Link
              to="/blog"
              className="  mx-5 hover:bg-gray-600  text-base  hover:text-white p-2 rounded-lg"
            >
              Blog
            </Link> */}
           
          </ul>

        </div>
        <div>
          <Link
            className="flex justify-center items-center text-2xl font-bold ms-3 me-3 p-3 rounded hover:bg-gray-600 hover:text-white"
            to="/"
          >
            <img
              className=" ms-3 rounded-full"
              width="70px"
              height="34px"
              src={logo}
              alt=""
            />

            <h3 className="ml-3">Md. Arif Ul Islam</h3>
          </Link>
        </div>
      </div>

      {/* //////////////////////////////
      
      start end //////////////////// */}


      {/* nav lg screen  (middle part) */}
      <div className="navbar-end text-xl font-semibold  hidden lg:flex">
        <Link
          className=" mr-5  hover:bg-gray-600 px-3 py-2 rounded hover:text-2xl  hover:text-white"
          to="/"
        >
          HOME
        </Link>
        <Link
          className=" mr-5  hover:bg-gray-600 px-3 py-2 rounded hover:text-2xl hover:text-white  "
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className=" mr-5  hover:bg-gray-600 px-3 py-2 rounded hover:text-2xl hover:text-white  "
          to="/education"
        >
          EDUCATION
        </Link>
        <Link
          className=" mr-5  hover:bg-gray-600 px-3 py-2 rounded hover:text-2xl hover:text-white  "
          to="/skills"
        >
          SKILLS
        </Link>

        <Link
          className=" mr-5  hover:bg-gray-600 px-3 py-2 rounded hover:text-2xl hover:text-white "
          to="/projects"
        >
          PROJECTS
        </Link>
       
        <Link
          className=" mr-5  hover:bg-gray-600 px-3 py-2 rounded hover:text-2xl hover:text-white  "
          to="/resume"
        >
          RESUME
        </Link>
        {/* <Link
          className=" mr-5  hover:bg-gray-600 px-3 py-2 rounded hover:text-2xl hover:text-white  "
          to="/blog"
        >
          Blog
        </Link> */}
      
      </div>
      {/* end */}

      {/* <div className="navbar-end">
    
      </div> */}
    </div>
  );
};

export default Navbar;