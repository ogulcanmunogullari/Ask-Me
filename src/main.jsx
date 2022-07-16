import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GeneralProvider } from "./ContextAPI/GeneralContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </BrowserRouter>
  </>
);
