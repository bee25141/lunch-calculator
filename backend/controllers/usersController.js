let orm = require("../models/orm");

let user = {
    insertNewLunch: (request, response) => {
        orm.insert({
                table: "lunch_data",
                column1: "analysis",
                analysis: request.body.analysis,
                column2: "cost",
                cost: request.body.cost,
                column3: "description",
                description: request.body.description,
                column4: "location",
                location: request.body.location,
                column5: "restaurant",
                restaurant: request.body.restaurant,
                column6: "weight",
                weight: request.body.weight
            }, (error, result) => {
                response.json(result);
            });

        },

    selectById: (request, response) => {
        console.log(request.params)
        orm.select({
            selection: "*",
            table: "lunch_data",
            column: "restaurant",
            value: request.params.id
        }, (error, result) => {
            response.json(result);
        });
    },

    getAllAnalysis: (request, response) => {
        orm.selectAllAverages({
            column1: "restaurant",
            column2: "analysis",
            table: "lunch_data",
            groupBy: "restaurant"
        }, (error, result) => {
            response.json(result);
        });
    },

    getLocationAnalysis: (request, response) => {
        console.log(request.params);
        orm.selectLocationAverage({
            column1: "location",
            column2: "analysis",
            table: "lunch_data",
            condition: "restaurant",
            value: request.params.id,
            groupBy: "location"
        }, (error, result) => {
            response.json(result);
        });
    }
};

module.exports = user;