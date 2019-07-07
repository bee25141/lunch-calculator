//Requires NPM express package
const express = require("express");
let user = require("./controllers/user")

let router = express.Router();

module.exports = function(app){
//Routing traffic to the home page
router.get("/", (request, response) => {
    response.render("index");
});

//routing traffic to the analysis page
router.get("/analysis", (request, response) => {
    response.render("views/analysis");
});

//Routes for API calls
router.post("/api/lunch", (request, response) => {
    "hit";
    user.insertNewLunch(request, response);
})
};