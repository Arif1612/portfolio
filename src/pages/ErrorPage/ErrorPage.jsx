import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/404.gif";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="text-center" id="error-page">
        <div>
        <img src={img} className="w-full max-h-screen" alt="" />
      </div>
      <Link to="/" className="absolute  bottom-5 left-2/3  ">
        <button className=" bg-red-600 m-5 p-5 rounded-xl text-2xl text-white  font-bold">
          Back To Home
        </button>
      </Link>
     <div className="absolute text-2xl  bottom-8 left-1/3 ">
     <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
     </div>
    </div>
  );
}