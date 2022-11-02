const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.get("/", (request, response) => {
  response.send("DBlock 2022");
});

module.exports = app;
