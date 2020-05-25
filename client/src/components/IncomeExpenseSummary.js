import React, { useContext } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { GlobalContext } from "../contexts";

const useStyles = makeStyles({
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});

export const IncomeExpenseSummary = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);

  let totalIncome = 0;
  transactions
    .filter((transaction) => transaction.amount > 0)
    .forEach((transaction) => {
      totalIncome += transaction.amount;
    });

  let totalExpenses = 0;
  transactions
    .filter((transaction) => transaction.amount <= 0)
    .forEach((transaction) => {
      totalExpenses += transaction.amount;
    });

  return (
    <>
      <Typography variant="h3" className={classes.positive}>
        Income:
        <NumberFormat value={totalIncome} displayType={"text"} prefix={"$"} />
      </Typography>
      <Typography variant="h3" className={classes.negative}>
        Expenses:
        <NumberFormat value={totalExpenses} displayType={"text"} prefix={"$"} />
      </Typography>
    </>
  );
};
