const dbConnection = require("../database/dbConnection");
const deleteData = name => {
  return dbConnection
    .query(`DELETE FROM users WHERE name = $1;`, [name])
    .then(res => res)
    .catch(err => err);
};
module.exports = deleteData;
