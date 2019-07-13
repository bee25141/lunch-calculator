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

    $.get("/api/graph", function (data) {
        for (i = 0; i < data.length; i++) {
            let graphData = {
                restaurant: data[i].restaurant,
                value: data[i].average
            }
            analysisArray.push(graphData);
        };
    }).then(callback);

};

//Function for displaying D3 bargraph
function barGraphDisplay() {

    const svg = d3.select('svg');
    const svgContainer = d3.select('#container');
    for (i = 0; i < analysisArray.length; i++) {
        var dataSet = analysisArray[i].value;
    };

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
        .domain([0, 40])

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
    //   .attr('transform', `translate(0, ${heigcoht})`)
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
        .text('Average Cost of Meal Per Pound')

    svg.selectAll(".bar").on("click", function (g) {
        console.log(g.restaurant);
    });
};