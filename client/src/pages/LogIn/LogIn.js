import React, {Component} from "react";
import LogInForm from "../../components/LogInForm/LogInForm"
import {Container, Row, Col} from "../../components/Grid/Grid"

class LogIn extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-8">
                    <LogInForm />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default LogIn;