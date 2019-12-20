const questionsList = require("./../model/index").questions;

exports.get = (req, res) => {
  res.render("home", { questions: questionsList });
};
