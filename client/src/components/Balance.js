import React, { useContext } from "react";
import { GlobalContext } from "../contexts";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;
  transactions.forEach((transaction) => {
    balance += transaction.amount;
  });

  const useStyles = makeStyles({
    positive: {
      color: "green",
    },
    negative: {
      color: "red",
    },
  });

  const classes = useStyles();

  return (
    <h2>
      Balance:{" "}
      <NumberFormat
        className={balance < 0 ? classes.negative : classes.positive}
        thousandSeparator={true}
        displayType={"text"}
        value={balance}
        prefix={"$"}
      />
    </h2>
  );
};
