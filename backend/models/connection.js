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

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  var connection = mysql.createConnection({
      host: "test123.cql2tzwph3cy.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "test123",
      password: process.env.AWS_RDSDB,
      database: "lunch_box_chi"
  });
}

  // Make connection.
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  var pool = mysql.createPool(connection);

  exports.connection = {
      query: function () {
          var queryArgs = Array.prototype.slice.call(arguments),
              events = [],
              eventNameIndex = {};

          pool.getConnection(function (err, conn) {
              if (err) {
                  if (eventNameIndex.error) {
                      eventNameIndex.error();
                  }
              }
              if (conn) { 
                  var q = conn.query.apply(conn, queryArgs);
                  q.on('end', function () {
                      conn.release();
                  });

                  events.forEach(function (args) {
                      q.on.apply(q, args);
                  });
              }
          });

          return {
              on: function (eventName, callback) {
                  events.push(Array.prototype.slice.call(arguments));
                  eventNameIndex[eventName] = callback;
                  return this;
              }
          };
      }
  };

  module.exports = connection;
