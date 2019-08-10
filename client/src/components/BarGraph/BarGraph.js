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
    
    componentDidMount(){
        this.drawChart();
    }
    drawChart() {
        // console.log(this.props.data)
        // const width = 800;
        // const height = 450;
        console.log(this.props.data)
        const margin = 50;
        const width = 1000 - 2 * margin;
        const height = 600 - 2 * margin;
        const el = new Element('div');
        const svg = d3.select(el)
            .append('svg')
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(this.props.data.map((s) => s.restaurant))
            .padding(0.75)
    
        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 14])
    
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

        return el.toReact();
    }
    
    
    render() {
        return this.drawChart();
    }
}

export default BarGraph;