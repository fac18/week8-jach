const postData = require("./../model/index").formPost;
const behaviour = require("./util/behaviour");
exports.post = (req, res) => {
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
};
