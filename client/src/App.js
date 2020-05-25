import React from "react";
import { GlobalProvider } from "./contexts";
import {
  Header,
  Balance,
  IncomeExpenseSummary,
  TransactionsList,
} from "./components";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Header />
      <Balance />
      <IncomeExpenseSummary />
      <TransactionsList />
    </GlobalProvider>
  );
}

export default App;
