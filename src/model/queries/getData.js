const dbConnection = require("../database/dbConnection.js");

// Ask database for particular data and runs the callback if no error
// The callback statements are actually in handleGettingUsers and is what sends the data away to front end

//   dbConnection.query("SELECT * FROM users", (err, res) => {
//     if (err) {
//       return cb(err);
//     } else {
//       cb(null, res.rows);
//     }
//   });
// };

const getData = () => {
  console.log("we're getting data in GetData");
  return dbConnection
    .query("SELECT * FROM users")
    .then(res => {
     return res.rows;
    })
    .catch(err => err);
};

// const getStoredPassword = (userName, cb) => {
//   dbConnection.query(
//     `SELECT password FROM users WHERE name = '${userName}'`,
//     (err, res) => {
//       if (err) {
//         cb(err);
//       } else {
//         cb(null, res.rows);
//       }
//     }
//   );
// };

// const loginQuery = (name, password, cb) => {
//   dbConnection.query(`SELECT id FROM users WHERE name=${name}, password=${password};`, (err, res) => {
//     if (err) {return cb(err)}
//     else {
//     cb(null, true)
//   }
//   });
// };

module.exports = getData;
