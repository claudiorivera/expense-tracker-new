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
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  // Return provider with values
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        isFetching: state.isFetching,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
