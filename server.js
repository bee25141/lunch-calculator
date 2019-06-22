//Requires NPM express package
const express = require("express");

let PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

//Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Requires Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Importing routes and giving server access to said routes
const routes = require("./controllers/lunch_controller");

// app.use(routes);

//Starting server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})