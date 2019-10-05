import React, {useState} from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import "./style.css";

export default function LogInForm() {
  const [userLogin, setUserLogin] = useState({
      email: "",
      password: ""
  });

  const updateUserLogin = (event) => {
      // console.log(event.target.name, event.target.password)

      setUserLogin({
        
        ...userLogin,
        [event.target.name]: event.target.value
      });
  }

  const loginSubmit = (event) => {
    event.preventDefault();
    let loginObject = {
      email: userLogin.email,
      password: userLogin.password
    }
    console.log(loginObject)
  }

  const callback = () => {
    console.log(userLogin);
  }
  
  return (
    <Form className="form">
      <FormGroup>
        <label htmlFor="#email">Email</label>
        <FormInput id="#email" placeholder="Email" value={userLogin.email}
        name={'email'} onChange={updateUserLogin}/>
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" 
        name={'password'} value={userLogin.password} onChange={updateUserLogin}/>
      </FormGroup>
      <br/>
      <Button type="submit" onClick={(event) => loginSubmit(event)}>Submit</Button>
    </Form>
  );
}