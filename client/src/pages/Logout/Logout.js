import React, {useState} from "react";
import {Container, Row, Col} from "../../components/Grid/Grid"
import {Button} from "shards-react";
import Api from "../../utils/Api"


export default function Logout() {

    return (
        <Container>
            <Row>
                <Col size="md-2"></Col>
                    <Col size="md-8" justify="center">
                        <h3>Are you sure you would like to logout?</h3>
                        <br/>
                        <Button>Yes</Button>
                    </Col>
            </Row>
        </Container>
    )
}
