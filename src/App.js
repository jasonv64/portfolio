import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Navigation from './components/navBar/navBar';
import Home from './components/home/home';
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

import './css/output.css';

function App() {

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigation />,
        
        errorElement: <ErrorPage />,
        children: [
            {              
              errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Home/> },
                    {
                      path: "home",
                      element: <Home/>
                    }
                  ],
            },
        ],
    },
  ]);

  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
