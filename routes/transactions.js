var express = require("express");
var router = express.Router();

// Services
const {
  getTransactions,
  addTransaction,
  deleteTransactionById,
} = require("../services/transactions");

// Routes
router.route("/").get(getTransactions).post(addTransaction);
router.route("/:id").delete(deleteTransactionById);

module.exports = router;
