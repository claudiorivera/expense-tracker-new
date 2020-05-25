import React, { createContext, useReducer } from "react";
import { AppReducer } from "../reducers";

// initialState
const initialState = {
  transactions: [
    {
      _id: 1,
      description: "Gig",
      amount: 100,
    },
    {
      _id: 2,
      description: "Cat Food",
      amount: -17,
    },
    {
      _id: 3,
      description: "Cat Litter",
      amount: -3000,
    },
    {
      _id: 4,
      description: "Other Gig",
      amount: 1000,
    },
  ],
  error: null,
  isFetching: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Action creators

  // Return provider
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        isFetching: state.isFetching,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
