const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get("/", (req, res) => res.send("Hello World!"));