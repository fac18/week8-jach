const fs = require("fs");
const dbConnection = require("./dbConnection");
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

//query method comes from Pool class
dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log("Tables created with results: ", res);
});
