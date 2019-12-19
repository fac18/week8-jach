const express = require("express");
const router = express.Router();
const behaviour = require("./behaviour");

const parse = require("body-parser");
const index = require("./../model/index");
const questionsList = index.questions;
const postData = index.formPost;
const getData = index.getUsers;

router.get("/", (req, res) => {
  res.render("home", { questions: questionsList });
});

console.log("I am here");

router.post("/create-user", (req, res) => {
  // console.log(req.body);
  const questionsArray = [
    req.body.q1,
    req.body.q2,
    req.body.q3,
    req.body.q4,
    req.body.q5,
    req.body.q6,
    req.body.q7
  ];

  let goodOrBad;
  let totalPoint = behaviour(questionsArray);
  if (totalPoint >= 4) {
    goodOrBad = true;
  } else {
    goodOrBad = false;
  }

  postData({
    name: req.body.username,
    behaviour: goodOrBad,
    category: req.body.category
  }).then(responseDb => {
    res.redirect('/presents');
  }).catch(error => {
    throw error;
  }); 

  // res.redirect('/presents');

});
<<<<<<< HEAD

||||||| merged common ancestors
=======


>>>>>>> master
router.get("/presents", (req, res) => {
  console.log("we're getting data");

  getData()
    .then(users => res.render("presents", { users }))
    .catch(err => {
      throw err;
    });
});

module.exports = router;
