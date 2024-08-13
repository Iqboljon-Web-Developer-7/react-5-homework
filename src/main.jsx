import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>
);
