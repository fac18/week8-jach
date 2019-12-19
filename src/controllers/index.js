const express = require("express");
const router = express.Router();

const parse = require("body-parser");
const index = require("./../model/index");
const questionsList = index.questions;
const postData = index.formPost;
const getData = index.getUsers;

router.get("/", (req, res) => {
  res.render("home", { questions: questionsList });
});

router.post("/create-user", (req, res) => {
  console.log("I am here");
  console.log({ req });
  console.log({ res });
  // console.log({})
  postData(req);

  // =>
  //
  //   if (err) throw err;
  //   else res.render("home", { stufffromdatabase });
  // });
});

router.get("/presents", (req, res) => {
  console.log("we're getting data");

  getData().then(users => res.render("presents", {users})).catch(err => {throw err})
  
});

module.exports = router;
