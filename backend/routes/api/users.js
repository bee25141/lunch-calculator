const router = require("express").Router();
const users = require("../../controllers/usersController")



//Routes for API calls

// Posting new lunch
router
    .route("/lunch")
    .post(users.insertNewLunch);

//Get request for all restaurant averages
router
    .route("/data")
    .get(users.getAllAnalysis);

//Get request for restaurant by ID
router
    .route("/location/:id")
    .get(users.getLocationAnalysis);

// Get request for user to login
router
    .route('/api/user/login')
    .post(user.login);

    
// Post request for user to logout
router
    .route('/api/user/logout')
    .post(user.logout);

module.exports = router;
