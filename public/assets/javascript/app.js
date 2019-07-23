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

// Signing user in using Firebase authentication
$(".signInBtn").on("click", function () {
    event.preventDefault();

    let email = $("#signInEmail").val().trim();
    let password = $("#signInPassword").val().trim()

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

        let errorCode = error.code;
        let errorMessage = error.message;
        user = firebase.auth().currentUser;

        console.log(firebase.auth().currentUser);
        handleAuthDisplay();

    });

});

// Signing user out using Firebase authentication
$(".signOut").on("click", function () {
    console.log("sign out")
    firebase.auth().signOut().catch(function (error) {

        let errorCode = error.code;
        let errorMessage = error.message;
        user = "";

    });
    console.log(firebase.auth().currentUser);
    // handleAuthDisplay();
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("user signed in");
    } else {
        console.log("user not signed out")
    }
  });

// Function for displaying proper UI based on whether user signed in or out
function handleAuthDisplay() {

    if (!user) {
        $(".signIn").removeClass("hide");
        $(".signOut").addClass("hide");
        $(".mealInput").addClass("hide");
        $(".signInInput").removeClass("hide");
    } if (user){
        $(".signIn").addClass("hide");
        $(".signOut").removeClass("hide");
        $(".mealInput").removeClass("hide");
        $(".signInInput").addClass("hide");
    };
};

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