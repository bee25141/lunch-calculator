import React, {useState} from 'react';
import { FormInput, FormTextarea, Button } from "shards-react";
import {Container, Row, Col} from "../../components/Grid/Grid"

export default function Join() {

    const [userRequest, setUserRequest] = useState({
        name: "",
        userName: "",
        email: "",
        userBio: ""
    });
  
    const updateUserRequest = (event) => {
  
        setUserRequest({
  
          ...userRequest,
          [event.target.name]: event.target.value
        });
    };

    const sendUserRequest = (event) => {
        event.preventDefault();
        console.log(userRequest)
    }


    return (
      <Container>
          <Row>
              <Col size="md-2"></Col>
              <Col size="md-8">
                <br/>
                <h3>Interested in contributing to Lunchbox Chi? Apply with the fields below and we'll 
                    respond with the appropriate credentials.</h3>
                    <br/>
                <FormInput placeholder="Name" name={'name'} value={userRequest.name} onChange={updateUserRequest} className="mb-2" />
                <FormInput placeholder="User Name" name={'userName'} value={userRequest.userName} onChange={updateUserRequest} className="mb-2" />
                <FormInput placeholder="Email" type="email" name={'email'} value={userRequest.email} 
                onChange={updateUserRequest}className="mb-2" />
                <br/>
                <FormTextarea placeholder="Tell us about yourself" size="lg" name={'userBio'}
                value={userRequest.userBio} onChange={updateUserRequest} />
                <br/>
                <Button type="submit" onClick={(event) => sendUserRequest(event)}>Submit</Button>
            </Col>
        </Row>
      </Container>
    );

}