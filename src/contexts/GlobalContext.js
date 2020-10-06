import React, { createContext, useReducer } from "react";
import { AppReducer } from "../reducers";

// initialState
const initialState = {
  transactions: [],
  error: null,
  isFetching: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action creators
  const addTransaction = async (transactionToAdd) => {
    try {
      const response = await fetch("/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionToAdd),
      });
      const { addedTransaction } = await response.json();
      dispatch({
        type: "ADD_TRANSACTION_SUCCESSFUL",
        payload: addedTransaction,
      });
    } catch (error) {
      dispatch({ type: "ADD_TRANSACTION_FAILED", payload: error });
    }
  };
  const deleteTransactionById = async (id) => {
    try {
      const response = await fetch(`/transactions/${id}`, {
        method: "DELETE",
      });
      await response.json();
      dispatch({ type: "DELETE_TRANSACTION_BY_ID_SUCCESSFUL", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_TRANSACTION_BY_ID_FAILED", payload: error });
    }
  };
  const getTransactions = async () => {
    try {
      const response = await fetch("/transactions");
      const { transactions } = await response.json();
      dispatch({ type: "GET_TRANSACTIONS_SUCCESSFUL", payload: transactions });
    } catch (error) {
      dispatch({ type: "GET_TRANSACTIONS_FAILED", payload: error });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        isFetching: state.isFetching,
        addTransaction,
        deleteTransactionById,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
