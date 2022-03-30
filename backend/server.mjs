// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import exercisesRouter from "./routes/exercises.mjs";
import usersRouter from "./routes/users.mjs";
import data from "./data.mjs";
import seedRouter from "./routes/seedRoutes.mjs";
import productRouter from "./routes/productRoutes.mjs";

// uses .env variables
dotenv.config();
// creates server
const app = express();
app.use("/api/seed", seedRouter);
// assigns port
const port = process.env.PORT || 5000;
// middleware to use cors and parse json
app.use(cors());
app.use(express.json());
// get the uri from .env
const uri = process.env.ATLAS_URI;
// connect to db
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to db :D");
  })
  .catch((err) => {
    console.log(err.message);
  });

// require the different routers, just files that define routes for specific things

// use the routes
app.use("/users", usersRouter);
app.use("/products", productRouter);

// if successful, lmk
app.listen(port, () => console.log(`Listening on port ${port}`));
