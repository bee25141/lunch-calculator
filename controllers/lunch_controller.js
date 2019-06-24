//Requires NPM express package
const express = require("express");


let router = express.Router();

router.get("/", (request, response) => {
    console.log("hit");
    response.render("index");
})

module.exports = router;