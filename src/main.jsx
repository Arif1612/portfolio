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
import Skills from './pages/Home/Skills/Skills.jsx'
import Education from './pages/Home/Education/Education.jsx'



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
        path: "/about",
        element: <About></About>
    
      },
      {
        path: "/education",
        element: <Education></Education>
    
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
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
