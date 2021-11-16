import React from "react";
import ReactDOM from "react-dom";

import "./styles/material_icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./styles/index.css";

import App from "./views/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
