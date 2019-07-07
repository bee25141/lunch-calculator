const connection = require("./connection");

let orm = {

    select: (queryObject, callback) => {
        let queryString = "SELECT ?? FROM ??";
        let searchCriteria = [queryObject.selection, queryObject.table];

        if (queryObject.value) {
            queryString += " WHERE ?? = ?";
            searchCriteria.push(queryObject.column);
            searchCriteria.push(queryObject.value);
        }
        connection.query(queryString, searchCriteria, function (err, result) {
            if (err) throw err;
            callback(err, result);
        });
    },
    insert: (queryObject, callback) => {
        let queryString = 'INSERT INTO ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? =?, ?? = ?';
        let searchCriteria = [queryObject.table, queryObject.column1, queryObject.analysis, queryObject.column2, queryObject.cost,
            queryObject.column3, queryObject.description, queryObject.column4, queryObject.location,
            queryObject.column5, queryObject.restaurant, queryObject.column6, queryObject.weight
        ];

        connection.query(queryString, searchCriteria, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    update: (queryObject, callback) => {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        let searchCriteria = [queryObject.table, queryObject.column, queryObject.value, queryObject.row, queryObject.id];

        connection.query(queryString, searchCriteria, function (err, result) {
            if (err) throw err;
            callback(result)
        });
    },
    delete: function (queryObject, callback) {
        let queryString = 'DELETE FROM ?? WHERE ?? = ?';
        let searchCriteria = [queryObject.table, queryObject.row, queryObject.id];
        
        connection.query(queryString, searchCriteria, function (err, result) {
            if (err) throw err;
            callback(result)
        });
    }
};

module.exports = orm;