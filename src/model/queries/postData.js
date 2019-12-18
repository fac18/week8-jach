const dbConnection = require("../database/dbConnection");

const postData = (name, behaviour, category) => {
  return dbConnection.query(
    "INSERT INTO users (name, behaviour, category) VALUES ($1, $2, $3)",
    [name, behaviour, category]
  );
};

module.exports = postData;
