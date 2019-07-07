//Requires NPM MySQL package
const mysql = require("mysql");

//Establishing connection to the database
let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "lunch_box_chi"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;