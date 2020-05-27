import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../contexts";

const useStyles = makeStyles({
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});

export const Transaction = ({ transaction }) => {
  const classes = useStyles();
  const { deleteTransactionById } = useContext(GlobalContext);

  const handleDelete = () => {
    deleteTransactionById(transaction._id);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <IconButton size="small" color="secondary" onClick={handleDelete}>
          <DeleteForever fontSize="inherit" />
        </IconButton>
      </ListItemIcon>
      <ListItemText
        primary={transaction.description}
        disableTypography={true}
      />
      <NumberFormat
        value={transaction.amount}
        prefix={"$"}
        displayType={"text"}
        className={transaction.amount < 0 ? classes.negative : classes.positive}
      />
    </ListItem>
  );
};
