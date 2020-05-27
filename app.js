require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Db connect
require("./config/db")();

const transactionsRouter = require("./routes/transactions");
app.use("/transactions", transactionsRouter);

// https://coursework.vschool.io/deploying-mern-with-heroku/
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
