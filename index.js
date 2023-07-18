const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my app!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
