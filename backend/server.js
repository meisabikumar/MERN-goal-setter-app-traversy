const dotenv = require("dotenv").config();

const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db')

connectDB()
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
