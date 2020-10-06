import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts";
import { TextField, Button, Box } from "@material-ui/core";

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
      <Box display="flex" flexDirection="column" margin="10px">
        <TextField
          onChange={(e) => {
            setTransaction({ ...transaction, description: e.target.value });
          }}
          value={transaction.description}
          label="Description"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="number"
          onChange={(e) => {
            setTransaction({
              ...transaction,
              amount: parseInt(e.target.value),
            });
          }}
          value={transaction.amount}
          label="Amount"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};
