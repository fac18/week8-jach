const dbConnection = require("../database/dbConnection.js");

const getData = () => {
  return dbConnection
    .query("select users.behaviour, users.name, inventory.gift from users, inventory WHERE users.behaviour=inventory.behaviour AND users.category=inventory.category;")
    .then(res => {
      return res.rows;
    })
    .catch(err => err);
};

module.exports = getData;

// https://www.w3schools.com/sql/sql_join_inner.asp
SELECT behaviour, category
FROM users
INNER JOIN inventory
ON users.behaviour = inventory.good && users.category = inventory.type;

SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;

SELECT gift
FROM inventory
WHERE ()

SELECT behaviour,category FROM users INNER JOIN inventory ON behaviour,category;
