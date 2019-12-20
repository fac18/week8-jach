const deleteUserData = require("../model/queries/deleteData");

exports.deleteUser = (req, res) => {
  const nameUser = req.params.name;
  deleteUserData(nameUser)
    .then(() => {
      res.redirect("/presents");
    })
    .catch(err => {
      console.log("this is err", err.message);
      throw err;
    });
};
