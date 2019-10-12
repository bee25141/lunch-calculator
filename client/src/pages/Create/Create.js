import React, {useState} from "react";
import { Form, FormRadio, FormInput, FormGroup, Button } from "shards-react";
import {Container, Row, Col} from "../../components/Grid/Grid"
import Api from "../../utils/Api"

export default function Create() {

        const [user, setValues] = useState({
            username:  "",
            email:  "",
            admin: null,
            password:  "",
            passwordConfirm:  "",
        });

        const updateUser = (event) => {

            setValues({
                ...user,
                [event.target.name]: event.target.value 
            });
        }

        const createUser = event => {
            event.preventDefault();

            let userObject = {
                username: user.username,
                email: user.email,
                password: user.password,
                password_confirm: user.passwordConfirm
            }
            
            Api.createUser(userObject)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
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
                                                <label htmlFor="#admin">Admin</label>
                                                <br/>
                                                <FormRadio
                                                    inline
                                                    name="admin"
                                                    value={user.admin}
                                                    checked={user.admin === 1}
                                                    onChange={updateUser}> Yes
                                                </FormRadio>
                                                <FormRadio
                                                    inline
                                                    name="admin"
                                                    checked={user.admin === 0}
                                                    onChange={updateUser}> No
                                                </FormRadio>
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

                                            <Button theme="primary" onClick={(event) => createUser(event)} >Submit</Button>
                                    </Form>
                            </Col>
                    </Row>
            </Container>
        )
}