// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.mjs";
import seedRouter from "./routes/seedRoutes.mjs";
import productRouter from "./routes/productRoutes.mjs";

// uses .env variables
dotenv.config();
// get the uri from .env
const uri = process.env.ATLAS_URI;
// creates server
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// connect to db
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to db :D");
  })
  .catch((err) => {
    console.log(err.message);
  });

// use the routes
app.use("/api/seed", seedRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// if successful, lmk
app.listen(port, () => console.log(`Listening on port ${port}`));
