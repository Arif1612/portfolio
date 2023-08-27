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
import About from './pages/Home/Home/About/About.jsx'
import Blog from './pages/Home/Home/Blog/Blog.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Projects></Projects>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
 
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HelmetProvider>
     <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
    </div>
     </HelmetProvider>
  </React.StrictMode>
);
