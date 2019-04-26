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

    //setting the current date and time in browser placeholder
    var dateTimePlaceholder = new Date();
    $("#today").innerHTML = dateTimePlaceholder;


    //setting global variables
    var restaurant = "";
    var description = "";
    var weight = "";
    var cost = "";
    var dateTime = "";
    var meal = 0;
    $(".statsContainer").hide();

    function lunchAnalysis(cost, weight){
        var analysis = cost / weight;
        analysis = analysis.toFixed(2);
        console.log(analysis);
        return analysis;
    }

    //Inputting meal stats
    $(".submit").on("click", function () {
        event.preventDefault();
        restaurant = $(".restaurantInput").val().trim();
        description = $(".descriptionInput").val().trim();
        weight = $(".weightInput").val().trim();
        cost = $(".costInput").val().trim();
        dateRaw = $(".dateTimeInput").val().trim();
        dateTime = moment(dateRaw).format('MMMM Do YYYY, h:mm a');
        console.log(dateTime);
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

        //Hiding the input UI
        $(".mealInput").hide();

        //Populating and displaying stats
        $("#restaurantSummary").text(restaurant);
        $("#dateTimeSummary").text(dateTime);
        $("#costSummary").text("$" + cost);
        $("#analysisSummary").text("Your meal at " + restaurant + " cost " + " $" + analysis + " per pound");
        $(".statsContainer").show();



    })


});