import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { GlobalContext } from "../contexts";

export const IncomeExpenseSummary = () => {
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
      <h3>
        Income:
        <NumberFormat value={totalIncome} displayType={"text"} prefix={"$"} />
      </h3>
      <h3>
        Expenses:
        <NumberFormat value={totalExpenses} displayType={"text"} prefix={"$"} />
      </h3>
    </>
  );
};
