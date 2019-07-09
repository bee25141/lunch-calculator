
let user = require("./controllers/user")

module.exports = function(app){
//Routing traffic to the home page
app.get("/", (request, response) => {
    response.render("pages/index");
});

app.get("/test", (request, response) => {
    app.use(express.static(__dirname + '/public/views')); 
});

//routing traffic to the analysis page
app.get("/analysis", function(request, response){
    response.render("pages/analysis_all");
});

//Routes for API calls
app.post("/api/lunch", (request, response) => {
    user.insertNewLunch(request, response);
});

//Get request for all restaurant averages
app.get("/api/graph", (request, response) => {
    console.log("hit");
})
};