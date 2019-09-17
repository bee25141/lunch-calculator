import React, {useState} from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import {Container, Row, Col} from "../../components/Grid/Grid"
import {Card, CardBody, CardTitle} from "shards-react";

export default function Create() {

        const [user, setValues] = useState({
            username:  "",
            email:  "",
            password:  "",
            passwordConfirm:  "",
        });

        const updateUser = event => {

            setValues({
                [event.target.name]: event.target.value 
            }, callback())
        }

        const createUser = event => {
            event.preventDefault();

            let userObject = {
                username: user.username,
                email: user.email,
                password: user.password
            }
            
            console.log(userObject);
        }

        const callback = () => {
            console.log(user.username)
            console.log(user.email)
            console.log(user.password)
            console.log(user.passwordConfirm)
        }

        return (
            <Container>
                    <Row>

                            <Col size="md-2"></Col>
                            <Col size="md-8">
                                    <Form>
                                            <FormGroup>
                                                <label htmlFor="#username">Username</label>
                                                <FormInput id="#username" value={user.username} name="username"
                                                onChange={updateUser} />
                                            </FormGroup>
                                            <FormGroup>
                                                <label htmlFor="#email">Email</label>
                                                <FormInput id="#email" value={user.email} name="email"
                                                onChange={updateUser} />
                                            </FormGroup>
                                            <FormGroup>
                                                <label htmlFor="#password">Password</label>
                                                <FormInput type="password" id="#password" value={user.password} name="password"
                                                onChange={updateUser} />
                                            </FormGroup>
                                            <FormGroup>
                                                <label htmlFor="#passwordConfirm">Confirm Password</label>
                                            <FormInput type="password" id="passwordConfirm" value={user.passwordConfirm} name="passwordConfirm"
                                                onChange={updateUser} />
                                            </FormGroup>

                                            <Button theme="primary" onClick={(event) => createUser()} >Submit</Button>
                                    </Form>
                            </Col>
                    </Row>
            </Container>
        )
}