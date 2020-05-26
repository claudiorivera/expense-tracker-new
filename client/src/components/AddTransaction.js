import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts";

export const AddTransaction = () => {
  const initialState = {
    description: "",
    amount: "",
  };

  const [transaction, setTransaction] = useState(initialState);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => {
          setTransaction({ ...transaction, description: e.target.value });
        }}
        type="text"
        value={transaction.description}
        placeholder="Enter description"
      />
      <input
        onChange={(e) => {
          setTransaction({
            ...transaction,
            amount: parseInt(e.target.value),
          });
        }}
        type="number"
        value={transaction.amount}
        placeholder="Enter amount"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
