import React from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import "./style.css";

export default function LogInForm() {
  return (
    <Form className="form">
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>
  );
}