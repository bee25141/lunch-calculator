let averagesArray = [];
let dataArray = [];


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
        .domain([0, 14])

    const makeYLines = () => d3.axisLeft()
        .scale(yScale)

    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    chart.append('g')
        .call(d3.axisLeft(yScale));

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
        let id = g.restaurant;

        $.get("/api/data/" + id, data => {

            for (i = 0; i < data.length; i++) {
                dataArray.push(data[i]);
                dataArray.sort((a, b) => (a.analysis > b.analysis) ? 1 : -1);
                console.log(dataArray);
            }
        });

        $.get("api/average/" + id, averages => {
            for(i=0; i<averages.length; i++){
                averagesArray.push(averages[i]);
                averagesArray.sort((a, b) => (a.average > b.average) ? 1 : -1);
            }
        });

        $()
    });
};