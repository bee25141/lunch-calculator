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
    var analysisArray = [];

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
    }

    //Pulling data from respective restaurants
    function restaurantData(barGraphCallback) {
        database.ref("/Meals").orderByChild("restaurant").equalTo("chipotle").on("value", function (snapshot) {
            getAnalysis("chipotle", snapshot.val());
        });
        database.ref("/Meals").orderByChild("restaurant").equalTo("corner bakery cafe").on("value", function (snapshot) {
            getAnalysis("corner bakery cafe", snapshot.val());
        });
        database.ref("/Meals").orderByChild("restaurant").equalTo("roti modern mediterranean").on("value", function (snapshot) {
            getAnalysis("roti modern mediterranean", snapshot.val());
            barGraphCallback();
        });

    
        
        //  notificationService.postNotification('RESTAURANT_DATA_DOWNLOADED', null);
    };

    console.log(analysisArray);
    //Function for displaying D3 bargraph
    function barGraphDisplay() {

        const svg = d3.select('svg');
        const svgContainer = d3.select('#container');

        const margin = 50;
        const width = 1000 - 2 * margin;
        const height = 600 - 2 * margin;

        const chart = svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`);

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(analysisArray.map((s) => s.restaurant))
            .padding(0.75)

        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 10]);

        // vertical grid lines
        // const makeXLines = () => d3.axisBottom()
        //   .scale(xScale)

        const makeYLines = () => d3.axisLeft()
            .scale(yScale)

        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        chart.append('g')
            .call(d3.axisLeft(yScale));

        // vertical grid lines
        // chart.append('g')
        //   .attr('class', 'grid')
        //   .attr('transform', `translate(0, ${height})`)
        //   .call(makeXLines()
        //     .tickSize(-height, 0, 0)
        //     .tickFormat('')
        //   )

        chart.append('g')
            .attr('class', 'grid')
            .call(makeYLines()
                .tickSize(-width, 0, 0)
                .tickFormat('')
            )
        console.log(analysisArray.length)
        const barGroups = chart.selectAll()
            .data(analysisArray)
            .enter()
            .append('g')

        barGroups
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (g) => xScale(g.restaurant))
            .attr('y', (g) => yScale(g.value))
            .attr('height', (g) => height - yScale(g.value))
            .attr('width', xScale.bandwidth())
        // .on('mouseenter', function (actual, i) {
        //     d3.selectAll('.value')
        //         .attr('opacity', 0)

        //     d3.select(this)
        //         .transition()
        //         .duration(300)
        //         .attr('opacity', 0.6)
        //         .attr('x', (a) => xScale(a.language) - 5)
        //         .attr('width', xScale.bandwidth() + 10)

        //     const y = yScale(actual.value)

        //     line = chart.append('line')
        //         .attr('id', 'limit')
        //         .attr('x1', 0)
        //         .attr('y1', y)
        //         .attr('x2', width)
        //         .attr('y2', y)

        //     barGroups.append('text')
        //         .attr('class', 'divergence')
        //         .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
        //         .attr('y', (a) => yScale(a.value) + 30)
        //         .attr('fill', 'white')
        //         .attr('text-anchor', 'middle')
        //         .text((a, idx) => {
        //             const divergence = (a.value - actual.value).toFixed(1)

        //             let text = ''
        //             if (divergence > 0) text += '+'
        //             text += `${divergence}%`

        //             return idx !== i ? text : '';
        //         })

        // })
        // .on('mouseleave', function () {
        //     d3.selectAll('.value')
        //         .attr('opacity', 1)

        //     d3.select(this)
        //         .transition()
        //         .duration(300)
        //         .attr('opacity', 1)
        //         .attr('x', (a) => xScale(a.language))
        //         .attr('width', xScale.bandwidth())

        //     chart.selectAll('#limit').remove()
        //     chart.selectAll('.divergence').remove()
        // })

        barGroups
            .append('text')
            .attr('class', 'value')
            .attr('x', (a) => xScale(a.restaurant) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.value) + 30)
            .attr('text-anchor', 'middle')
            .text((a) => `$${a.value}`)

        svg
            .append('text')
            .attr('class', 'label')
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('$ / Pound')

        svg.append('text')
            .attr('class', 'label')
            .attr('x', width / 2 + margin)
            .attr('y', height + margin * 1.7)
            .attr('text-anchor', 'middle')
            .text('Restaurants')

        svg.append('text')
            .attr('class', 'title')
            .attr('x', width / 2 + margin)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text('Average Meal Cost Per Pound')

        // svg.append('text')
        //     .attr('class', 'source')
        //     .attr('x', width - margin / 2)
        //     .attr('y', height + margin * 1.7)
        //     .attr('text-anchor', 'start')
        //     .text('Source: Stack Overflow, 2018')

    };
    restaurantData(barGraphDisplay);
});