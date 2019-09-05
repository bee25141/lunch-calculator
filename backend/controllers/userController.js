const uuidv1 = require('uuid');
require("dotenv").config();
let log = require("../models/login");

module.exports = {
    dud: () => {
        log.insertNew()
    },
    login: () => {
        log.insertNew();
    },
    logout: () => {
        log.logOut()
        // console.group("logOut huh")
    }
}