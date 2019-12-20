const express = require("express");
const router = express.Router();
const error = require("./error");

const parse = require("body-parser");
const index = require("./../model/index");
const postData = index.formPost;
const getData = index.getUsers;
const home = require("./home");

router.get("/", home);

console.log("I am here");

router.post("/create-user",
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
