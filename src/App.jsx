import { Outlet } from "react-router-dom";
import Navbar from "./pages/NavBar/NavBar";
import { Helmet } from "react-helmet-async";
import ParticleBg from "./pages/components/ParticleBg";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Navbar></Navbar>
      <ParticleBg></ParticleBg>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;