// import { createRoot } from "react-dom/client";
// import React, { StrictMode } from "react";
// import "./styles/tokens.css";
// import "./styles/global.css";
// import "./styles/index.css";
// import App from "./App"; // Por que el App se debe importar de ultimo?
// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
