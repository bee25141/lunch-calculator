//On document ready
$(document).ready(function(){

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
    var location = "";
    var description = "";
    var weight = "";
    var cost = "";
    var dateTime = "";
    var meal = 0;

    function lunchAnalysis(cost, weight) {
        var analysis = cost / weight;
        analysis = analysis.toFixed(2);
        return analysis;
    }

    //Inputting meal stats
    $(".submit").on("click", function () {
        event.preventDefault();
        restaurant = $(".restaurantInput").val().trim().toLowerCase();
        location = $(".locationInput").val().trim().toLowerCase();
        description = $(".descriptionInput").val().trim().toLowerCase();
        weight = $(".weightInput").val().trim();
        cost = $(".costInput").val().trim();
        dateRaw = $(".dateTimeInput").val().trim();
        dateTime = moment(dateRaw).format('MMMM Do YYYY, h:mm a');
        meal++;
        analysis = lunchAnalysis(cost, weight);

        database.ref("/Meals").push({
            meal: meal,
            dateTime: dateTime,
            restaurant: restaurant,
            location: location,
            description: description,
            weight: weight,
            cost: cost,
            analysis: analysis
        });

        //Hiding the input UI
        $(".mealInput").addClass("hide");

        //Populating and displaying stats
        $("#restaurantSummary").text(restaurant);
        $("#dateTimeSummary").text(dateTime);
        $("#costSummary").text("$" + cost);
        $("#analysisSummary").text("Your meal at " + restaurant + " cost " + " $" + analysis + " per pound");
        $(".statsContainer").removeClass("hide");
    });

    $(".back").on("click", function () {
        $(".statsContainer").addClass("hide");
        $(".mealInput").removeClass("hide");
        $(".restaurantInput").val("");
        $(".locationInput").val("");
        $(".descriptionInput").val("");
        $(".weightInput").val("");
        $(".costInput").val("");
        $(".dateTimeInput").val("");
    });
    //Creating an array of objects for the data 
    database.ref("/Meals").on("value", function(snapshot){
        // dataArray = [];
        var dataSnap = snapshot.val();
        dataSnap = (Object.values(dataSnap));
        console.log(dataSnap);

        // var chipotle = dataSnap.filter(function(restaurant){
        //     return dataSnap.restaurant == "chipotle";
        // })
        // console.log(chipotle);  
        // dataArray.push(snapshot.val());
        // for (i=0; i<dataArray.length; i++){
        //     console.log(dataArray[i]);
        // }


    })

});
