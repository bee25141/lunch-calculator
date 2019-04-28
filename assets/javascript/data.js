//Setting an array for the meals
var mealArray = [];


//Listener event for new meals added to database
database.ref("/meals").on("child_added", function (snapshot) {
console.log(snapshot.val());
})