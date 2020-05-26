import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts";
import { Transaction } from "../components";

export const TransactionsList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {transactions.map((transaction) => (
        <Transaction key={transaction._id} transaction={transaction} />
      ))}
    </>
  );
};
