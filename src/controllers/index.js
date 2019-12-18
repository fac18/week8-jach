const express = require("express");
const router = express.Router();

const questionsList = require("./../model/index");

router.get("/", (req, res) => {
  res.render("home", { questions: questionsList });
});

module.exports = router;
