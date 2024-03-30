import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import IndexStyles from "./assets/style/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <IndexStyles />
  </React.StrictMode>
);
