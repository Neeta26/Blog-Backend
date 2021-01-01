const fs = require("fs");
const path = require("path");
const router = require("./routes/blogRoutes");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { config } = require("process");
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Home Page </h1>");
});
app.get("*", (req, res) => {
  res.send("<h1>Dashboard Page</h1>");
});

app.use("/blogs", router);
app.listen(process.env.PORT, console.log(`App started on ${process.env.PORT}`));
