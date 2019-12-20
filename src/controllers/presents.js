const getData = require("./../model/index").getUsers;

exports.get = (req, res) => {
  getData()
    .then(users => res.render("presents", { users }))
    .catch(err => {
      throw err;
    });
};
