const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
