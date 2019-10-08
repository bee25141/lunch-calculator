let hashPass = require('hashPass');
let uuidv1 = require('uuid/v1');
let log = require("./login");
require("dotenv").config();

module.exports = {

    create: function (request, response) {
        if (
            !request.body.email.includes('@') ||
            !request.body.email.includes('.')
        ) {
            response.status(400).json({
                error: 'email is not valid'
            });
        } else if (request.body.password !== request.body.password_confirm) {
            response.status(400).json({
                error: 'passwords do not match'
            });
        } else {
            let hashedPassword = hashPass(request.body.password);
            let userRequest = {
                user_name: request.body.username,
                user_email: request.body.email,
                user_password: hashedPassword.hash,
                salt: hashedPassword.salt
            };
            log.insertNew(userRequest, function (error, result) {
                if (error) {
                    console.log(error);
                    if (error.sqlMessage.includes('Duplicate')) {
                        response
                            .status(400)
                            .json({
                                error: 'email already exists in system'
                            });
                    } else {
                        response.status(500).json({
                            error: 'oops we did something bad'
                        });
                    }
                } else {
                    console.log("success!!!!!!!!")
                    // console.log("response", response)
                    response.redirect('/api/user/login');
                }
            });
        }
    },

    login: function (request, response) {
        // console.log("hitting login")
        // console.log("request", request)
        log.selectByEmail(request.body.email, function (error, result) {
            console.log("result", result)
            if (error) {
                console.log(error);
                response.status(500).json({
                    error: 'oops we did something bad'
                });
            } else if (!result.length) {
                response.status(404).json({
                    error: 'user not found'
                });
            } else {
                user = result[0];
                console.log("user", user)
                loginAttempt = hashPass(request.body.password, user.salt);
                if (loginAttempt.hash === user.password) {
                    let uuid = uuidv1();
                    log.updateSession(user.email, uuid, function (error, result) {
                        delete user.user_password;
                        delete user.salt;
                        delete user.session;

                        response.cookie('x_session_token', uuid);
                        response.redirect('/dashboard');
                    });
                } else {
                    response.status(401).json({
                        error: 'improper login credentials'
                    });
                }
            }
        });
    },

    logout: function (request, response) {
        // log.removeSession(request.cookies['x_session_token'], function (
        //     error,
        //     result
        // ) {
        //     response.clearCookie('x_session_token');
        //     response.redirect('/');
        // });
    },

    getMyself: function (request, response) {
        // log.getMyself(request.cookies['x_session_token'], function (
        //     error,
        //     result
        // ) {
        //     response.json(result[0]);
        // });
    },

    getUserByID: function (request, response) {
        // log.getUserByID(request.params.id, function (error, result) {
        //     if (result.length) {
        //         response.json(result[0]);
        //     } else {
        //         response.status(404).json({
        //             error: 'user not found'
        //         });
        //     }
        // });
    }
};

