//Requires NPM MySQL package
const mysql = require("mysql");

// Establishing connection to the database
let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "lunch_box_chi"
});
// let connection = mysql.createConnection({
//     host: "lunchboxchi.cql2tzwph3cy.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "bee25141",
//     password: "password",
//     database: "lunchboxchi"
// });

// Make connection.
connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;