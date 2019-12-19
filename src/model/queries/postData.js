const dbConnection = require("../database/dbConnection");

const postData = userInformation => {
  return dbConnection.query(
    "INSERT INTO users (name, behaviour, category) VALUES ($1, $2, $3)",
    [userInformation.name, userInformation.behaviour, userInformation.category]
  );
};

module.exports = postData;
