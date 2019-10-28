import React from 'react';
import { FormInput, FormTextarea } from "shards-react";
import {Container, Row, Col} from "../../components/Grid/Grid"
export default class Join extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: null };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <Container>
          <Row>
              <Col size="md-2"></Col>
              <Col size="md-8">
                <br/>
                <h3>Interested in contributing to Lunchbox Chi? Apply with the fields below and we'll 
                    respond with the appropriate credentials.</h3>
                    <br/>
                <FormInput placeholder="Name" className="mb-2" />
                <FormInput placeholder="User Name" className="mb-2" />
                <FormInput placeholder="email" type="email" className="mb-2" />
                <p className="mb-2">
                {(value && `🗣 ${value}`) || "🤔 Waiting for you to say something..."}
                </p>
                <FormTextarea onChange={this.handleChange} />
            </Col>
        </Row>
      </Container>
    );
  }
}