  const mysql = require("mysql");
  require("dotenv").config();

  // Establishing connection to the database
  // let connection = mysql.createConnection({
  //   host: "localhost",
  //   port: 8889,
  //   user: "root",
  //   password: "root",
  //   database: "lunch_box_chi"
  // });
let pool = {}
let connect = function(){
      if (process.env.JAWSDB_URL) {
        connection = mysql.createConnection(process.env.JAWSDB_URL);
      } else {
        pool = mysql.createPool({
          host: "test123.cql2tzwph3cy.us-east-1.rds.amazonaws.com",
          port: 3306,
          user: "test123",
          password: process.env.AWS_RDSDB,
          database: "lunch_box_chi"
      });
      // var connection = mysql.createConnection({
      //     host: "test123.cql2tzwph3cy.us-east-1.rds.amazonaws.com",
      //     port: 3306,
      //     user: "test123",
      //     password: process.env.AWS_RDSDB,
      //     database: "lunch_box_chi"
      // });
    }
}
connect()
  // Make connection.
  // connection.connect(function (err) {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
  //   console.log("connected as id " + connection.threadId);
  // });

  pool.getConnection(function(err, connection){
    if (err){
      console.log("error connecting", err.stack);
      connection.destroy();
      connect();
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = pool;
