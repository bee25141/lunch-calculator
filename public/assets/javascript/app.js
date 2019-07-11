//On document ready
$(document).ready(function () {

    //setting the current date and time in browser placeholder
    let dateTimePlaceholder = new Date();
    $("#today").innerHTML = dateTimePlaceholder;

    //Inputting meal stats
    $(".submit").on("click", function () {
        console.log("click");
        event.preventDefault();
        // Form validation for inputs
        let validateForm = function () {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        };

        if (validateForm()) {
            let restaurant = $(".restaurantInput").val().trim().toLowerCase();
            let location = $(".locationInput").val().trim().toLowerCase();
            let description = $(".descriptionInput").val().trim().toLowerCase();
            let cost = $(".costInput").val().trim();
            let weight = $(".weightInput").val().trim();
            let dateRaw = $(".dateTimeInput").val().trim();
            let dateTime = moment(dateRaw).format('MMMM Do YYYY, h:mm a');
            let analysis = lunchAnalysis(cost, weight);

            let newData = {
                restaurant: restaurant,
                location: location,
                description: description,
                weight: weight,
                cost: cost,
                dateTime: dateTime,
                analysis: analysis
            };

            //Populating and displaying stats in the modal
            $("#restaurantSummary").append(restaurant);
            $("#dateTimeSummary").append(dateTime);
            $("#costSummary").append(`$ ${cost}`);
            $("#analysisSummary").append(`Your meal at ${restaurant} cost $ ${analysis} per pound`);

            //Posting data to the database
            $.post("/api/lunch", newData);
        };

        //Emptying input fields
        $("#back").on("click", function () {
            $(".restaurantInput").val("");
            $(".locationInput").val("");
            $(".descriptionInput").val("");
            $(".weightInput").val("");
            $(".costInput").val("");
            $(".dateTimeInput").val("");
        });
    });

});

$(document).ready(function() {
    if(window.location === "analysis.ejs"){
        console.log("analysis")
  }
});

//Function for determining average cost per pound
let lunchAnalysis = function (cost, weight) {
    var analysis = cost / weight;
    analysis = analysis.toFixed(2);
    return analysis;
};

//Function for getting the average cost per pound at each restaurant
let getAnalysis = function (restaurant, data) {
    var restaurant = restaurant;
    let dataSnap = data;
    dataSnap = (Object.values(dataSnap));
    for (i = 0; i < dataSnap.length; i++) {
        let dataSumArray = [(dataSnap[i].analysis)];
        var dataSum = dataSumArray.reduce(function (a, b) {
            return a + b;
        }, 0) / (dataSumArray.length);
    }
    var restaurantAnalysis = {
        restaurant: restaurant,
        value: dataSum
    };
    analysisArray.push(restaurantAnalysis);
};