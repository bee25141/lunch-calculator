let orm = require("../../backend/models/orm");

let users = {
    insertNew: function (user, callback) {
        // user.user_email = user.user_email.toLowerCase();
        // let query = {
        //     table: 'users',
        //     data: user
        // };
        // orm.insert(query, callback);
        console.log("insertNew")
        // console.log(console.log(query))
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

module.exports = users;