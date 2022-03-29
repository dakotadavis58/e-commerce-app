import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import { StoreProvider } from "./Store.js";

ReactDOM.render(
  <StoreProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StoreProvider>,
  document.getElementById("root")
);
