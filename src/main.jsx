import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetContext"
import { UserContext } from "./contexts/UserContext"

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <UserContext.Provider value={[{
        name: "Raj",
        email: " raj@email.com",
      }]}>
        <App />
      </UserContext.Provider>
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
