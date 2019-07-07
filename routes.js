
let user = require("./controllers/user")

module.exports = function(app){
//Routing traffic to the home page
app.get("/", (request, response) => {
    response.render("index");
});

//routing traffic to the analysis page
app.get("/analysis", (request, response) => {
    response.render("views/analysis");
});

//Routes for API calls
app.post("/api/lunch", (request, response) => {
    console.log("hit");
    user.insertNewLunch(request, response);
})
};