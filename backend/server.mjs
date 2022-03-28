// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import exercisesRouter from "./routes/exercises.mjs";
import usersRouter from "./routes/users.mjs";
import data from "./data.mjs";

// uses .env variables
dotenv.config();
// creates server
const app = express();
// assigns port
const port = process.env.PORT || 5000;
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

// use the routes
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.get("/products", (req, res) => {
  res.send(data.products);
});

// if successful, lmk
app.listen(port, () => console.log(`Listening on port ${port}`));
