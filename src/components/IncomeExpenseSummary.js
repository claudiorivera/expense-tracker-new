import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { GlobalContext } from "../contexts";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
  noMargin: {
    margin: 0,
  },
  dividerOnRight: {
    borderRight: "1px solid #ccc",
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
    <Box display="flex" justifyContent="space-between">
      <Box flexGrow={1} textAlign="center" className={classes.dividerOnRight}>
        <h4 className={classes.noMargin}>INCOME</h4>
        <NumberFormat
          className={classes.positive}
          value={totalIncome}
          displayType={"text"}
          prefix={"$"}
        />
      </Box>
      <Box flexGrow={1} textAlign="center">
        <h4 className={classes.noMargin}>EXPENSES</h4>
        <NumberFormat
          className={classes.negative}
          value={totalExpenses}
          displayType={"text"}
          prefix={"$"}
        />
      </Box>
    </Box>
  );
};
