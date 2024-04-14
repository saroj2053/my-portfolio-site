import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeProvider.tsx";
import SkinProvider from "./contexts/SkinContext/SkinProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SkinProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </SkinProvider>
    </ThemeProvider>
  </React.StrictMode>
);
