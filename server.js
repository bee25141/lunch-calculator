require('dotenv').config();

//Requires NPM express package
const express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for the app from the "public" directory in the application directory
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/index')); 

//Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Importing routes and giving server access to said routes
require('./routes')(app);

//Starting server
app.listen(PORT, function () {
    console.log("Server listening on:" + PORT);
})