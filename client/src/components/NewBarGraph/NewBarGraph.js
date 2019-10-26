import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
import "./style.css"


// class NewBarGraph extends Component {
    
//     render() {

//        return (

//         // <div>{console.log('data', this.props.data)}</div>
//         <XYPlot
//         width={300}
//         height={300}>
//         <VerticalGridLines />
//         <HorizontalGridLines />
//         <XAxis />
//         <YAxis />
//         <LineSeries
//             data={[
//                 {x: 1, y: 4},
//                 {x: 5, y: 2},
//                 {x: 15, y: 6}
//             ]}/>
//         </XYPlot>
//        )
//     }
// }

const NewBarGraph = (props) => {

    return (
        <XYPlot
            width={300}
            height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries
                data={[
                    {x: 1, y: 4},
                    {x: 5, y: 2},
                    {x: 15, y: 6}
                ]}/>
        </XYPlot>
    );
}

export default NewBarGraph;