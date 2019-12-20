const formPost = require("./queries/postData");
const getUsers = require("./queries/getData");
const deleteData = require("./queries/deleteData");

const questions = require("./questions");

module.exports = { questions, formPost, getUsers, deleteData };
