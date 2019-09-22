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



    callback = () => {
        console.log(this.state);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
      };

    addLunch = () => {
        Api.addLunch(this.state);
    }

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