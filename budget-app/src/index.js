import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { BudgetProvider } from "./contexts/BudgetContexts";

ReactDOM.render(
  <BudgetProvider>
    <App />
  </BudgetProvider>,
  document.getElementById("root")
);
