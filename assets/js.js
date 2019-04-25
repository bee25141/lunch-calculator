$("document").ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAX8zHTpluy8Jeylce5rxACr6WkgNnhyhk",
        authDomain: "lunch-calculator.firebaseapp.com",
        databaseURL: "https://lunch-calculator.firebaseio.com",
        projectId: "lunch-calculator",
        storageBucket: "lunch-calculator.appspot.com",
        messagingSenderId: "773327047733"
    };
    firebase.initializeApp(config);

    var database = firebase.database();


    //setting global variables
    var restaurant = "";
    var description = "";
    var weight = "";
    var cost = "";
    var dateTime = "";
    var meal = 0;

    function lunchAnalysis(cost, weight){
        var analysis = cost / weight;
        return analysis;
    }

    //Inputting meal stats
    $(".submit").on("click", function () {
        event.preventDefault();
        restaurant = $(".restaurantInput").val().trim();
        description = $(".descriptionInput").val().trim();
        weight = $(".weightInput").val().trim();
        cost = $(".costInput").val().trim();
        dateTime = $(".dateTimeInput").val().trim();
        meal++;
        analysis = lunchAnalysis(cost, weight);
        console.log(restaurant, description, weight, cost, dateTime, meal, analysis);

        database.ref("/Meals").push({
            meal: meal,
            dateTime: dateTime,
            restaurant: restaurant,
            description: description,
            weight: weight,
            cost: cost,
            analysis: analysis
        })



    })


});