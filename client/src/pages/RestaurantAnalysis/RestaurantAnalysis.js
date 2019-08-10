import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import BarGraph from "../../components/BarGraph/BarGraph"
import Api from "../../utils/Api";

class RestaurantAnalysis extends Component {
  state = {
    restaurantData: []
  }

  callback = () => {
    console.log(this.state);
  }
   componentDidMount () {
     Api.getAllData()
     .then(res => {
       this.setState({restaurantData: res.data})
     })

   }
	render() {

        return (

              <div>
                  <BarGraph data={this.state.restaurantData} />
              </div>

            );
          };


	}


export default RestaurantAnalysis;