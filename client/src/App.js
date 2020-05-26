import React from "react";
import { GlobalProvider } from "./contexts";
import {
  Header,
  Balance,
  IncomeExpenseSummary,
  TransactionsList,
  AddTransaction,
} from "./components";
import { CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: 0,
    height: 48,
    margin: "20px auto",
    fontFamily: "Lato",
  },
});

function App() {
  const classes = useStyles();

  return (
    <GlobalProvider>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item xs={12} className={classes.root}>
          <Header />
        </Grid>
        <Grid
          container
          className={classes.root}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Balance />
          </Grid>
          <Grid item xs={12} md={6}>
            <IncomeExpenseSummary />
          </Grid>
          <Grid item xs={12} md={6}>
            <TransactionsList />
          </Grid>
          <Grid item xs={12} md={6}>
            <AddTransaction />
          </Grid>
        </Grid>
      </Grid>
    </GlobalProvider>
  );
}

export default App;
