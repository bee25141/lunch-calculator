//Requires NPM express package
const express = require("express");


let router = express.Router();

//Routing traffic to the home page
router.get("/", (request, response) => {
    response.render("index");
});

//routing traffic to the analysis page
router.get("/analysis.html", (request, response) => {
    response.render("analysis");
});


module.exports = router;