import React, {useState} from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import "./style.css";

export default function LogInForm() {
  const [userLogin, setUserLogin] = useState({
      email: "",
      password: ""
  });

  const updateUserLogin = (event) => {
      setUserLogin({
        ...userLogin,
        [event.target.name]: event.target.value 
      });
  }

  const callback = () => {
    console.log(userLogin);
  }
  
  return (
    <Form className="form">
      <FormGroup>
        <label htmlFor="#email">Email</label>
        <FormInput id="#email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>
  );
}