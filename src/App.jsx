import { Outlet } from "react-router-dom";
import Navbar from "./pages/NavBar/NavBar";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;