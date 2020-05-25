export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION_BY_ID":
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            (transaction) => transaction._id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};
