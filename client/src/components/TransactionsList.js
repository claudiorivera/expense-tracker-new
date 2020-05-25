import React, { useContext } from "react";
import { GlobalContext } from "../contexts";
import { Transaction } from "../components";

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h2>Transactions:</h2>
      {transactions.map((transaction) => (
        <Transaction key={transaction._id} transaction={transaction} />
      ))}
    </>
  );
};
