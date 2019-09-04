const router = require("express").Router();
const usersRoutes = require("./users");
const userRoutes = require("./user")

// Book routes
router.use("/users", usersRoutes);
router.use("/user", userRoutes);


module.exports = router;