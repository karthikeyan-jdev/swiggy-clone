import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "./router/router";
import "./styles/globle.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
);
