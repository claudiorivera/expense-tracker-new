const Transaction = require("../models/Transaction");

// GET /transactions - Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    // Empty filter matches every Transaction
    const transactions = await Transaction.find();
    res.status(200).json({ success: true, transactions });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// POST /transactions - Add transaction
exports.addTransaction = async (req, res) => {
  try {
    const addedTransaction = await Transaction.create(req.body);
    res.status(201).json({ success: true, addedTransaction });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// DELETE /transactions/:id - Delete transaction by id
exports.deleteTransactionById = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
