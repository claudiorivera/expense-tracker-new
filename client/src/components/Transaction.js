import React from "react";
import NumberFormat from "react-number-format";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});

export const Transaction = ({ transaction }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="h5"
      className={transaction.amount < 0 ? classes.negative : classes.positive}
    >
      {transaction.description}:{" "}
      <NumberFormat
        value={transaction.amount}
        prefix={"$"}
        displayType={"text"}
      />
    </Typography>
  );
};
