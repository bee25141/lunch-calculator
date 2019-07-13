let orm = require("../config/orm");

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
            }, function (error, result) {
                response.json(result);
            });

        },

    getAllAnalysis: (request, response) => {
        orm.selectAllAverages({
            column1: "restaurant",
            column2: "analysis",
            table: "lunch_data",
            groupBy: "restaurant"
        }, function(error, result){
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
        }, function(error, result){
            response.json(result);
        });
    }
};

module.exports = user;