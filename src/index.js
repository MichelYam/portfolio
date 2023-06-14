import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./Context/Theme";
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
