const deleteUserData = require("../model/queries/deleteData");

module.exports = (req, res) => {
  deleteUserData(res.render("/presents"));
};
