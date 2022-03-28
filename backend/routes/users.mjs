import express from "express";
import User from "../models/user.model.mjs";
const router = express.Router();

// mongoose model we created
// first route on /users path
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update").post((req, res) => {
  res.json("Updated user");
});

router.route("/delete").post((req, res) => {
  res.json("Deleted user");
});

export default router;