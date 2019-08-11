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
        connection.query(queryString, searchCriteria, function (error, result) {
            if (error) throw error;
            callback(error, result);
        });
    },

    selectLocationAverage: (queryObject, callback) => {
        let queryString = "SELECT ??, ROUND(AVG(??), 2) AS average FROM ?? WHERE ?? = ? GROUP BY ??;";
        let searchCriteria = [queryObject.column1, queryObject.column2, queryObject.table, queryObject.condition, queryObject.value, queryObject.groupBy];

        connection.query(queryString, searchCriteria, function(error, result){
            if (error) throw error;
            callback(error, result);
        }); 
    },

    selectAllAverages: (queryObject, callback) => {
        let queryString = "SELECT ??, ROUND(AVG(??), 2) AS average FROM ?? GROUP BY ??;"
        let searchCriteria = [queryObject.column1, queryObject.column2, queryObject.table, queryObject.groupBy];

        connection.query(queryString, searchCriteria, function (error, result) {
            if (error) throw error;
            console.log(result)
            callback(error, result);
        });
    },

    insert: (queryObject, callback) => {
        let queryString = 'INSERT INTO ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? =?, ?? = ?';
        let searchCriteria = [queryObject.table, queryObject.column1, queryObject.analysis, queryObject.column2, queryObject.cost,
            queryObject.column3, queryObject.description, queryObject.column4, queryObject.location,
            queryObject.column5, queryObject.restaurant, queryObject.column6, queryObject.weight
        ];

        connection.query(queryString, searchCriteria, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    update: (queryObject, callback) => {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        let searchCriteria = [queryObject.table, queryObject.column, queryObject.value, queryObject.row, queryObject.id];

        connection.query(queryString, searchCriteria, function (error, result) {
            if (error) throw error;
            callback(result)
        });
    },
    delete: (queryObject, callback) => {
        let queryString = 'DELETE FROM ?? WHERE ?? = ?';
        let searchCriteria = [queryObject.table, queryObject.row, queryObject.id];

        connection.query(queryString, searchCriteria, function (error, result) {
            if (error) throw error;
            callback(result)
        });
    }
};

module.exports = orm;