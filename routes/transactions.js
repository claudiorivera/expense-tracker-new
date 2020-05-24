var express = require("express");
var router = express.Router();

// Route handlers
const {
  getTransactions,
  addTransaction,
  deleteTransactionById,
} = require("../services/transactions");

// Actions
// GET transactions
router.route("/").get(getTransactions).post(addTransaction);

// DELETE transaction
router.route("/:id").delete(deleteTransactionById);

module.exports = router;
