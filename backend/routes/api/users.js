const router = require("express").Router();
const users = require("../../controllers/usersController")



//Routes for API calls

// Posting new lunch
router
    .route("/api/lunch")
    .post(users.insertNewLunch);

//Get request for all restaurant averages
router
    .route("/api/data")
    .get(users.getAllAnalysis);

//Get request for restaurant by ID
router
    .route("/api/data/:id")
    .get(users.selectById);

module.exports = router;
