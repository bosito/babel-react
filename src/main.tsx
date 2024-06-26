import React from "react";
import ReactDOM from "react-dom/client";
// providers
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

import App from "./App.tsx";
import "./index.css";
import "atropos/css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
