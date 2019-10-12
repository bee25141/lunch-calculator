import React, {useState} from "react";
import {Container, Row, Col} from "../../components/Grid/Grid"
import {Button} from "shards-react";
import Api from "../../utils/Api"


export default function Logout() {
    let user_session = document.cookie.replace(/(?:(?:^|.*;\s*)x_session_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    const handleLogOut = () => {

    Api.logout(user_session)
    //  .then(logOutResult => {
    //      console.log(logOutResult)
    //     document.cookie = 'x_session_token' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    //  })

    };

    return (
        <Container>
            <Row>
                <Col size="md-2"></Col>
                    <Col size="md-8" justify="center">
                        <h3>Are you sure you would like to logout?</h3>
                        <br/>
                        <Button onClick={handleLogOut}>Yes</Button>
                    </Col>
            </Row>
        </Container>
    )
}
