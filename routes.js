
let user = require("./controllers/user")

module.exports = function(app){
//Routing traffic to the home page
app.get("/", (request, response) => {
    response.render("analysis_all");
});
//routing traffic to the analysis page
app.get("/meal_input", (request, response) => {
    response.render("meal_input");
});
//routing traffic to the restaurant map page
app.get("/map", (request, response) => {
    ("hit")
    response.render("map");
});

//Routes for API calls
app.post("/api/lunch", (request, response) => {
    user.insertNewLunch(request, response);
});

//Get request for all restaurant averages
app.get("/api/data", (request, response) => {
    user.getAllAnalysis(request, response);
})

//Get request for restaurant by ID
app.get("/api/data/:id", (request, response) => {
    user.selectById(request, response);
})

app.get("/api/average/:id", (request, response) => {
    user.getLocationAnalysis(request, response);
});
};