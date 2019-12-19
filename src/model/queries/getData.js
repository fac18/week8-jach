const dbConnection = require("../database/dbConnection.js");

const getData = () => {
  return dbConnection
    .query(
      "select users.behaviour, users.name, inventory.gift from users, inventory WHERE users.behaviour=inventory.behaviour AND users.category=inventory.category;"
    )
    .then(res => {
      return res.rows;
    })
    .catch(err => err);
};

module.exports = getData;

// https://www.w3schools.com/sql/sql_join_inner.asp
