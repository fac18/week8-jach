const express = require("express");
const router = express.Router();
const parse = require("body-parser");

const { deleteUser } = require("./deleteUser");
const home = require("./home");
const createUser = require("./create-user");
const servePresents = require("./presents");
const error = require("./error");

router.get("/", home.get);
router.post("/create-user", createUser.post);
router.get("/presents", servePresents.get);
router.get("/delete-user/:name", deleteUser);
router.use(error.client);
router.use(error.server);

module.exports = router;
