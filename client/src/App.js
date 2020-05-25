import React from "react";
import { GlobalProvider } from "./contexts";
import {
  Header,
  Balance,
  IncomeExpenseSummary,
  TransactionsList,
  AddTransaction,
} from "./components";
import { Container, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <Balance />
        <IncomeExpenseSummary />
        <TransactionsList />
        <AddTransaction />
      </Container>
    </GlobalProvider>
  );
}

export default App;
