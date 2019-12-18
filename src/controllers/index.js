const express = require("express");
const router = express.Router();

const index = require("./../model/index");
const questions = index.questions;

router.get("/", (req, res) => {
  res.render("home", { questions: questionsList });
});

router.post("/create-user", (req, res) => {
  res.render("home", {});
});

module.exports = router;
