//On document ready
$(document).ready(function () {
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

});