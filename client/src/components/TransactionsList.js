import React, { useContext } from "react";
import { GlobalContext } from "../contexts";
import { Typography } from "@material-ui/core";
import { Transaction } from "../components";

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <Typography variant="h4">Transactions:</Typography>
      {transactions.map((transaction) => (
        <Transaction key={transaction._id} transaction={transaction} />
      ))}
    </>
  );
};
