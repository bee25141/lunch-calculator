const router = require("express").Router();
const user = require("../../controllers/userController")

// Post request for user to logout
router
    .route('/logout')
    .post(user.logout);
// Get request for user to login
router
    .route('/login')
    .post(user.login);

// Get request for info on authenticated user
router
    .route("/:session_token")
    .get(user.getAuthenticatedUser)


// Post request for creating new user
router
    .route('/create')
    .post(user.create);

module.exports = router;