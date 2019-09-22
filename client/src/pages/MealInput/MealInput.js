import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import MealInputForm from "../../components/MealInputForm/MealInputForm";
import Api from "../../utils/Api"
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


    // Callback function for checking state values on input change
    callback = () => {
        console.log(this.state);
    }

    // Function for setting state on input change
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
      };

    // API call to add lunch to db
    addLunch = () => {
        Api.addLunch(this.state);
    }
    // Function that handles form submission
    handleFormSubmit = event => {
        event.preventDefault();
        let analysis = this.state.cost / this.state.weight;
        analysis = analysis.toFixed(2);
        this.setState({analysis: analysis}, this.addLunch);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-1 md-3"></Col>
                    <Col size="sm-10 md-6">
                    <MealInputForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}
                    props={this.props}
                    />
                    </Col>
                    <Col size="sm-1 md-3"></Col>
                </Row>
            </Container>
        );
    };
}

export default MealInput;