import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
 
     <div >
      
      <About ></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

      <Helmet>
        <title>Portfolio | Home </title>
      </Helmet>
      
       
    </div>
  
  );
};

export default Home;
