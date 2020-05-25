import React from "react";
import NumberFormat from "react-number-format";

export const Transaction = ({ transaction }) => {
  return (
    <h4>
      {transaction.description}:
      <NumberFormat
        value={transaction.amount}
        prefix={"$"}
        displayType={"text"}
      />
    </h4>
  );
};
