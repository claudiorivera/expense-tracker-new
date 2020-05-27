require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client", "build")));
}

// Db connect
require("./config/db")();

const transactionsRouter = require("./routes/transactions");
app.use("/transactions", transactionsRouter);

module.exports = app;
