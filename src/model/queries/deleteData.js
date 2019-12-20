const dbConnection = require("../database/dbConnection");
const deleteData = () => {
  return dbConnection.query(`DELETE FROM users WHERE name = $1;`, [name]);
};
module.exports = deleteData;
