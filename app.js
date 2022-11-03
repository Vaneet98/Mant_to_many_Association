const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./connectionDB").connect();
require("./connectionDB").syn();
require("./models");
const router = require("./routes/user");

app.use("/api", router);
app.get("/", (Req, res) => {
  res.send("<h1>Home Page<h1>");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
