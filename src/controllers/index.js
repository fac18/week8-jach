const express = require("express");
const router = express.Router();

const index = require("./../model/index");
const questionsList = index.questions;
const postData = index.formPost;

router.get("/", (req, res) => {
  res.render("home", { questions: questionsList });
});

console.log("I am here");

router.post("/create-user", (req, res) => {
  console.log(req.body);
  postData({
    name: req.body.username,
    category: req.body.category
  });
});

module.exports = router;
