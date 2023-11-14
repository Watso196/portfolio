/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import ErrorPage from "./routes/ErrorPage";
import "./App.scss";

const el = document.getElementById("app");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(el);
root.render(
  <>
    <RouterProvider router={router} />
    {/*eslint-disable-next-line prettier/prettier*/}
  </>
);
