let orm = require("../models/orm");

let login = {
    insertNew: function (request, callback) {
        request.user_email = request.user_email.toLowerCase();
        let query = {
            table: 'users',
            column1: 'username',
            username: request.user_name,
            column2: 'email',
            email: request.user_email.toLowerCase(),
            column3: 'password',
            password: request.user_password,
            column4: 'salt',
            salt: request.salt
        };
        orm.insertUser(query, (error, result) => {
            if (error) throw error;
            callback(error, result)
        });
    },
    selectByEmail: function (email, callback) {
        let query = {
            table: 'users',
            selection: '*',
            column: 'email',
            value: email.toLowerCase(),
        };
        orm.select(query, callback);
    },
    updateSession: function (email, uuid, callback) {
        let query = {
            table: 'users',
            column: 'session',
            value: uuid,
            row: 'email',
            id: email
        };

        orm.update(query, callback);
    },
    removeSession: function (session, callback) {
        // let query = {
        //     table: 'users',
        //     data: {
        //         session: null
        //     },
        //     where: [{
        //         session: session
        //     }]
        // };
        // orm.update(query, callback);
        console.log("remove session")
    },

    getUserBySession: function (session, callback) {
        let query = {
            table: 'users',
            selection: ['email', 'userID', 'username', 'session'],
            column: 'session',
            value: session
        };
        orm.select(query, callback);

    },
};

module.exports = login;