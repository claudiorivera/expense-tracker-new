import React, { useContext } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { GlobalContext } from "../contexts";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});

export const Balance = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);
  let balance = 0;
  transactions.forEach((transaction) => {
    balance += transaction.amount;
  });

  return (
    <Typography
      variant="h2"
      className={balance < 0 ? classes.negative : classes.positive}
    >
      Balance:
      <NumberFormat
        thousandSeparator={true}
        displayType={"text"}
        value={balance}
        prefix={"$"}
      />
    </Typography>
  );
};
