const express = require("express");
const expressJwt = require("express-jwt")
const app = express();
require('dotenv').config()
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/tasks",
  err => {
    if (err) throw err;
    console.log("Connected to the server")
  }
);

app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/auth", require("./routes/authRoutes"));
app.use("/api/task", require("./routes/taskRoutes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
