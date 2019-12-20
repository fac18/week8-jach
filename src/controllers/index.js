const express = require("express");
const router = express.Router();
const behaviour = require("./util/behaviour");
const error = require("./error");

const parse = require("body-parser");
const index = require("./../model/index");
const questionsList = index.questions;
const postData = index.formPost;
const getData = index.getUsers;
const home = require("./home");

router.get("/", home);

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
  })
    .then(responseDb => {
      res.redirect("/presents");
    })
    .catch(error => {
      throw error;
    });

  // res.redirect('/presents');
});
router.get("/presents", (req, res) => {
  console.log("we're getting data");

  getData()
    .then(users => res.render("presents", { users }))
    .catch(err => {
      throw err;
    });
});

router.use(error.client);
router.use(error.server);

module.exports = router;
