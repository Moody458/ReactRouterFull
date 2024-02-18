import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./context/DataContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </BrowserRouter>
  </StrictMode>
);
