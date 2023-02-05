import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Label,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

export const Login = () => {
  // creating state variables for email and password
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  const navigate=useNavigate();
  // creating async function for login the customer based on the conditions
    async function login(e){
      e.preventDefault();
      try{
          await axios.post("http://localhost:5000/api/login",{
              email:email,
              password:password
          }).then((res)=>{
            console.log(res);
            const data = res.data;
            if(data.status===true) {
              alert('Login successful');
              navigate('/home');
          }
          else{alert('Login failed');}
          },(fail)=>{console.error(fail);});
          
      }
      catch(err){
          alert(err)
      }
  }
  const handleClick=()=>{navigate('/createuser');}
  return (
    <div>
      <Card style={{ width: "50rem" }} className="container m-5">
        <CardBody>
          <CardTitle tag="h3">
            <h3>Please Enter Details For Login</h3>
          </CardTitle>
          <Form>
          <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                value={email}
                placeholder="Enter Email Id"
                type="email"
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                value={password}
                placeholder="Enter your password "
                type="password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </FormGroup><Row>
            <Col md={6}>
            <Button onClick={login}>Sign in</Button></Col>
            <Col md={6}><Button onClick={handleClick}>For Registration</Button></Col></Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
