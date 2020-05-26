import React from "react";
import { GlobalProvider } from "./contexts";
import {
  Header,
  Balance,
  IncomeExpenseSummary,
  TransactionsList,
  AddTransaction,
} from "./components";
import { CssBaseline, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Lato",
    padding: "2vh 20vw",
  },
  cards: {
    padding: "10px 20px",
    margin: "10px 0px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <GlobalProvider>
      <CssBaseline />
      <Box className={classes.root}>
        <Header />
        <Balance />
        <Paper className={classes.cards}>
          <IncomeExpenseSummary />
        </Paper>
        <h2>Transactions:</h2>
        <Paper className={classes.cards}>
          <TransactionsList />
        </Paper>
        <h2>Add Transaction:</h2>
        <Paper className={classes.cards}>
          <AddTransaction />
        </Paper>
      </Box>
    </GlobalProvider>
  );
}

export default App;
