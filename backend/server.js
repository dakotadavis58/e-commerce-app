// imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// uses .env variables
require("dotenv").config();

// creates server
const app = express();
// assigns port
const port = process.env.PORT || 8000;

// middleware to use cors and parse json
app.use(cors());
app.use(express.json());

// get the uri from .env
const uri = process.env.ATLAS_URI;
// connect to db
mongoose.connect(uri);

// connection object
const connection = mongoose.connection;
// once connection is open, log it
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// require the different routers, just files that define routes for specific things
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// use the routes
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// if successful, lmk
app.listen(port, () => console.log(`Listening on port ${port}`));
