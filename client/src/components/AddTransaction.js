import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts";
import { Grid } from "@material-ui/core";

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
    <Grid
      container
      spacing={1}
      direction="column"
      justify="flex-start"
      alignItems="stretch"
    >
      <Grid item>
        <h2>Add Transaction:</h2>
      </Grid>
      <form onSubmit={onSubmit}>
        <Grid item>
          <input
            onChange={(e) => {
              setTransaction({ ...transaction, description: e.target.value });
            }}
            type="text"
            value={transaction.description}
            placeholder="Enter description"
          />
        </Grid>
        <Grid item>
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
        </Grid>
        <Grid item>
          <button type="submit">Submit</button>
        </Grid>
      </form>
    </Grid>
  );
};
