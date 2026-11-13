import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Portfolio from "./Pages/Portfolio/PortfolioRoute.jsx";
import Contact from "./Pages/Contact/ContactRoute.jsx";
import About from "./Pages/AboutMe/bio.jsx"
import Designs from "./Pages/Designs/designTest.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function RouteErrorFallback() {
  return <div>Something went wrong while loading this page.</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorFallback />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Designs",
        element: <Designs />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
