require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Db connect
require("./config/db")();

const transactionsRouter = require("./routes/transactions");
app.use("/transactions", transactionsRouter);

module.exports = app;
