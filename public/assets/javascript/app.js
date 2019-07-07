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
            var dateRaw = "";
            var dateTime = "";
            var analysisArray = [];
            var dataSet = parseInt("");

            function lunchAnalysis(cost, weight) {
                var analysis = cost / weight;
                analysis = analysis.toFixed(2);
                return analysis;
            }

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
                    let newData = {
                        restaurant: $(".restaurantInput").val().trim().toLowerCase(),
                        location: $(".locationInput").val().trim().toLowerCase(),
                        description: $(".descriptionInput").val().trim().toLowerCase(),
                        weight: $(".weightInput").val().trim(),
                        cost: $(".costInput").val().trim(),
                        dateRaw: $(".dateTimeInput").val().trim(),
                        dateTime: moment(dateRaw).format('MMMM Do YYYY, h:mm a'),
                        analysis: lunchAnalysis(cost, weight)
                    };

                        //Hiding the input UI
                        // $(".mealInput").addClass("hide");

                        //Populating and displaying stats
                        // $("#restaurantSummary").text(restaurant); $("#dateTimeSummary").text(dateTime); $("#costSummary").text("$" + cost); $("#analysisSummary").text("Your meal at " + restaurant + " cost " + " $" + analysis + " per pound"); $(".statsContainer").removeClass("hide");

                        $.post("/api/lunch", newData);
                }

                $(".back").on("click", function () {
                    $(".mealInput").removeClass("hide");
                    $(".restaurantInput").val("");
                    $(".locationInput").val("");
                    $(".descriptionInput").val("");
                    $(".weightInput").val("");
                    $(".costInput").val("");
                    $(".dateTimeInput").val("");
                });
            });

});

        //Function for getting the average cost per pound at each restaurant
        function getAnalysis(restaurant, data) {
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
