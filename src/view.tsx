import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App locale="en" width="100vw" height="100vh" />
  </StrictMode>
);
