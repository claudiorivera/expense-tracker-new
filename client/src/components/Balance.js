import React, { useContext } from "react";
import { GlobalContext } from "../contexts";
import NumberFormat from "react-number-format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;
  transactions.forEach((transaction) => {
    balance += transaction.amount;
  });

  return (
    <h2>
      Balance:{" "}
      <NumberFormat
        thousandSeparator={true}
        displayType={"text"}
        value={balance}
        prefix={"$"}
      />
    </h2>
  );
};
