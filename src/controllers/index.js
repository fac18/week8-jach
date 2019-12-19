const express = require("express");
const router = express.Router();

const index = require("./../model/index");
const questionsList = index.questions;
const postData = index.formPost;

router.get("/", (req, res) => {
  res.render("home", { questions: questionsList });
});

router.post("/create-user", (req, res) => {
  console.log("I am here");
  postData(stufftosend, (err, res) => {
    if (err) throw err;
    else res.render("home", { stufffromdatabase });
  });
});

module.exports = router;
