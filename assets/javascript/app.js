//On document ready
$(document).ready(function () {

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

    //Function for getting the average cost per pound at each restaurant
    function getAnalysis(restaurant, data){
        var restaurant = restaurant;
        let dataSnap = data;
        dataSnap = (Object.values(dataSnap));
        for(i=0;i<dataSnap.length; i++){
            let dataSumArray = [(dataSnap[i].analysis)];
            var dataSum = dataSumArray.reduce(function(a,b){return a + b;},0) / (dataSumArray.length);
        }
        var restaurantAnalysis = {[restaurant]: dataSum};
        analysisArray.push(restaurantAnalysis);
    }
    //Creating an array of objects for the data 
    let analysisArray = [];
    database.ref("/Meals").orderByChild("restaurant").equalTo("chipotle").on("value", function (snapshot) {
        getAnalysis("chipotle", snapshot.val());
    })
    console.log(analysisArray);
    function barGraphDisplay() {
        d3.select(".barGraph").select("svg").remove();
        var dataset = chipotle;
        var svgWidth = 900;
        var svgHeight = 250;
        var barPadding = 5;
        var barWidth = (svgWidth / dataset.length);
        var svg = d3.select('.barGraph').append("svg").attr("width", svgWidth).attr("height", svgHeight).attr("class", "bar-chart");

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([0, svgHeight]);

        var barChart = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("y", function (d) {
                return svgHeight - yScale(d) + 10;
            })
            .attr("height", function (d) {
                return yScale(d);
            })
            .attr("fill", "#282828")
            .attr("width", barWidth - barPadding)
            .attr("transform", function (d, i) {
                var translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            });

        var text = svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function (d, i) {
                return d;
            })
            .attr("y", function (d, i) {
                return svgHeight - d - 2;
            })
            .attr("x", function (d, i) {
                return barWidth * i;
            })
            .attr("fill", "white");
    };
    barGraphDisplay();

});