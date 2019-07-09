require('dotenv').config();

//Requires NPM express package
const express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(__dirname + '/public/views')); 

//Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Importing routes and giving server access to said routes
require('./routes')(app);

//Starting server
app.listen(PORT, function () {
    console.log("Server listening on:" + PORT);
})