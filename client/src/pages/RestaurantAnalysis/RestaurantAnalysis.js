import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Api from "../../utils/Api";

class RestaurantAnalysis extends Component {

   componentDidMount () {
	   Api.getAllData()
	   	.then(res => console.log(res))
		  .catch(err => console.log(err));
   }
	render() {

        return (

              <div className="App">
                
              </div>

            );
          };


	}


export default RestaurantAnalysis;