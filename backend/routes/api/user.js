const router = require("express").Router();
const user = require("../../controllers/userController")

// Get request for user to login
router
    .route('/login')
    .post(user.login);
    
// Post request for user to logout
router
    .route('/logout')
    .post(user.logout);
router
    .route('/create')
    .post(user.create);

module.exports = router;