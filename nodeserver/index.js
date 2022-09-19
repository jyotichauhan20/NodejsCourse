const express = require("express");
const hbs = require("hbs");
const path = require("path");
const localhost = "localhost";
// const port = process.env.POST || 3000;
const port = 8080;
const app = express();

app.set("views", path.join(__dirname));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(localhost, port, () => {
  console.log(`Server is on http://${localhost}:${port}`);
});
