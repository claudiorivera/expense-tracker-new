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
    padding: "10% 20%",
  },
  paper: {
    padding: "10px",
    margin: "10px",
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
        <Paper className={classes.paper}>
          <IncomeExpenseSummary />
        </Paper>
        <h2>Transactions:</h2>
        <Paper className={classes.paper}>
          <TransactionsList />
        </Paper>
        <h2>Add Transaction:</h2>
        <Paper className={classes.paper}>
          <AddTransaction />
        </Paper>
      </Box>
    </GlobalProvider>
  );
}

export default App;
