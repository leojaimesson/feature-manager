import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./presenters/GlobalStyle";
import { Router } from "./presenters/routes/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
