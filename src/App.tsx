import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import Root from "./pages/Root";
import Home from "./pages/Home";
import BreweryDetails from "./pages/BreweryDetails";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";

const theme = createTheme();

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: ":id",
          element: <BreweryDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
