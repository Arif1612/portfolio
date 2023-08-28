import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Projects from './pages/Home/Projects/Projects.jsx';
import Home from './pages/Home/Home/Home.jsx'
import About from './pages/Home/About/About.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/about",
        element: <About></About>
    
      },
      {
        path: "/blog",
        
      },
    ],
  },
 
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HelmetProvider>
        <RouterProvider router={router} />
     </HelmetProvider>
  </React.StrictMode>
);
