let users = require("../../controllers/usersController")



//Routes for API calls

// Posting new lunch
route
    .route("/api/lunch")
    .post(users.insertNewLunch);

//Get request for all restaurant averages
route
    .route("/api/data")
    .get(users.getAllAnalysis);

//Get request for restaurant by ID
route
    .route("/api/data/:id")
    .get(users.selectById);

module.exports = router;
