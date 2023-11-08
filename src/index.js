/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";

const el = document.getElementById("app");

const root = createRoot(el);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
