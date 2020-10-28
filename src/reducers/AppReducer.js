const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS_FAILED":
    case "ADD_TRANSACTION_FAILED":
    case "DELETE_TRANSACTION_BY_ID_FAILED":
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case "GET_TRANSACTIONS_SUCCESSFUL":
      return {
        ...state,
        transactions: action.payload,
        isFetching: false,
      };
    case "ADD_TRANSACTION_SUCCESSFUL":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        isFetching: false,
      };
    case "DELETE_TRANSACTION_BY_ID_SUCCESSFUL":
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            (transaction) => transaction._id !== action.payload
          ),
        ],
        isFetching: false,
      };
    default:
      return state;
  }
};
export default AppReducer;
