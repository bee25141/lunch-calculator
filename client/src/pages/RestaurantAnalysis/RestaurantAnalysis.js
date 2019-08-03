import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css"

class RestaurantAnalysis extends Component {

    constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
	}
	async componentDidMount() {
		try {
			const response = await fetch('https://sv24yggong.execute-api.us-east-1.amazonaws.com/beta');
            let responseJson = await response.json();
            console.log(responseJson);
            for (let i=0; i<responseJson.length; i++){
                console.log(responseJson[i])
            }
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}

	render() {

        return (

              <div className="App">
                
              </div>

            );
          };


	}


export default RestaurantAnalysis;