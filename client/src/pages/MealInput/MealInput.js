import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid/Grid";
import MealInputForm from "../../components/MealInputForm/MealInputForm";
import Api from "../../utils/Api";
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
        this.setState({[name]: value}, this.callback);
      };

    handleFormSubmit = event => {
        console.log("disabled for demo day functionality")
        // event.preventDefault();
        // let analysis = this.state.cost / this.state.weight;
        // analysis = analysis.toFixed(2);
        // this.setState({analysis: analysis}, this.callback);
        // Api.addLunch(this.state);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-1 md-2"></Col>
                    <Col size="sm-10 md-8">
                    <MealInputForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
                    </Col>
                    <Col size="sm-1 md-2"></Col>
                </Row>
            </Container>
        );
    };
}

export default MealInput;