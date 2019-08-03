import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Grid/Grid"
import MealInputForm from "../../components/MealInputForm/MealInputForm"
import "./style.css"

class MealInput extends Component {

    state = {
        restaurant: "",
        location: "",
        description: "",
        weight: "",
        cost: "",
        analysis: ""
    };



    callback = () => {
        console.log(this.state);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
      };

    handleFormSubmit = event => {
        event.preventDefault();
        let analysis = this.state.cost / this.state.weight;
        analysis = analysis.toFixed(2);
        this.setState({analysis: analysis}, this.callback);
    }

    render() {
        return (
            <div>
                <MealInputForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
            </div>
        );
    };
}

export default MealInput;