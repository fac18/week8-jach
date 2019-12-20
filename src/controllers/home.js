const index = require("./../model/index");
const questionsList = index.questions;

exports.get = (req, res) => {
  res.render("home", { questions: questionsList });
};
