import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { IconButton } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { GlobalContext } from "../contexts";

export const Transaction = ({ transaction }) => {
  const { deleteTransactionById } = useContext(GlobalContext);

  const handleDelete = () => {
    deleteTransactionById(transaction._id);
  };

  return (
    <h4>
      <IconButton size="small" color="secondary" onClick={handleDelete}>
        <DeleteForever fontSize="inherit" />
      </IconButton>
      {transaction.description}:
      <NumberFormat
        value={transaction.amount}
        prefix={"$"}
        displayType={"text"}
      />
    </h4>
  );
};
