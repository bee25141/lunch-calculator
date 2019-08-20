import React, { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import "./style.css"


class BarGraph extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: this.props.data,
        };
      }

    mapRoute(route){
        console.log(route)
    }
    
    drawChart() {

        console.log(this.props.data)
        const margin = 40;
        const width = 950;
        const height = 780;
        const el = new Element('div');
        const svg = d3.select(el)
            .append('svg')
            .attr('transform', `translate(${margin}, ${margin})`)
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(this.props.data.map((s) => s.restaurant))
            .padding(0.15)
    
        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 10])
    
        const makeYLines = () => d3.axisLeft()
            .scale(yScale)

        svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));
    
        svg.append('g')
            .call(d3.axisLeft(yScale));
    
        svg.append('g')
            .attr('class', 'grid')
            .call(makeYLines()
                .tickSize(-width, 0, 0)
                .tickFormat('')
            )
        const barGroups = svg.selectAll()
        .data(this.props.data)
        .enter()
        .append('g')
    
        barGroups
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (g) => xScale(g.restaurant))
            .attr('y', (g) => yScale(g.average))
            .attr('height', (g) => height - yScale(g.average))
            .attr('width', xScale.bandwidth())
    
        barGroups
            .append('text')
            .attr('class', 'value')
            .attr('x', (a) => xScale(a.restaurant) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.average) -10)
            .attr('text-anchor', 'middle')
            .text((a) => `$${a.average}`)
    
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
            .attr('y', height - 15)
            .attr('text-anchor', 'middle')
            .text('Restaurants')
    
        svg.append('text')
            .attr('class', 'title')
            .attr('x', width / 2 + margin)
            .attr('y', 15)
            .attr('text-anchor', 'middle')
            .text('Average Cost of Meal Per Pound')

        svg.selectAll('.bar').on('click', function() {
            window.location.href = ("/map/" + this.__data__.restaurant)
        })


        return el.toReact();
    }
    
    
    render() {
        return this.drawChart();
    }
}

export default BarGraph;