require('dotenv').config();

const express = require("express");
const routs = require("./routes")

let PORT = process.env.PORT || 8080;

let app = express();

// Define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//Importing routes and giving server access to said routes
app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  