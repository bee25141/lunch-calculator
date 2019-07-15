//On document ready
$(document).ready(function () {
    //Inputting meal stats
    $(".submit").on("click", function () {
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
            let analysis = lunchAnalysis(cost, weight);

            let newData = {
                restaurant: restaurant,
                location: location,
                description: description,
                weight: weight,
                cost: cost,
                analysis: analysis
            };

            //Populating and displaying stats in the modal
            $("#restaurantSummary").append(restaurant);
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
        });
    });
    getGraph(barGraphDisplay);


});

//Function for determining average cost per pound
let lunchAnalysis = function (cost, weight) {
    var analysis = cost / weight;
    analysis = analysis.toFixed(2);
    return analysis;
};

//Function for getting all restaurant averages for graph
let analysisArray = [];
let getGraph = function (callback) {

    $.get("/api/data", function (data) {
        for (i = 0; i < data.length; i++) {
            let graphData = {
                restaurant: data[i].restaurant,
                value: data[i].average
            };
            analysisArray.push(graphData);
        };
    }).then(callback);

};