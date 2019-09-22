let orm = require("../models/orm");

let login = {
    insertNew: function (request, response) {
        request.user_email = request.user_email.toLowerCase();
        let query = {
            table: 'users',
            column1: 'username',
            username: request.user_name,
            column2: 'email',
            email: request.user_email,
            column3: 'password',
            password: request.user_password,
            column4: 'salt',
            salt: request.salt
        };
        orm.insertUser(query, (error, result) => {
            if (error) throw error;
            console.log("response", response)
            // response.json(result);
        });
    },
    // selectByEmail: function (email, callback) {
    //     let query = {
    //         table: 'users',
    //         where: [{
    //             user_email: email.toLowerCase()
    //         }] //Update
    //     };
    //     orm.select(query, callback);
    // },
    updateSession: function (email, uuid, callback) {
        // let query = {
        //     table: 'users',
        //     data: {
        //         session: uuid
        //     },
        //     where: [{
        //         user_email: email.toLowerCase()
        //     }] //Update
        // };
        // orm.update(query, callback);
        console.log("update session")
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
    // getMyself: function (session, callback) {
    //     let query = {
    //         table: 'users',
    //         columns: ['user_email', 'user_id'],
    //         where: [{
    //             session: session
    //         }]
    //     };
    //     orm.select(query, callback);
    // },
    getUserByID: function (id, callback) {
        // let query = {
        //     table: 'users',
        //     columns: ['user_email', 'user_id', 'created', 'modified'],
        //     where: [{
        //         user_id: id
        //     }]
        // };
        // orm.select(query, callback);
        console.log("get user by id")
    },

    logIn: function(user, callback){
        console.log("this is login")
    },

    logOut: function(user, callback){
        console.log("this is logout")
    }
};

module.exports = login;