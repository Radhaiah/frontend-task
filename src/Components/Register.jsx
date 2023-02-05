import React from "react";
import { Card,CardBody,Label,CardTitle,Form,FormGroup,Input,Button, Row, Col } from "reactstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // creating initial values for input fields
  let initialvalues={
    firstname:'',
    lastname:'',
    mobile:'',
    email:'',
    password:''
}
// creating state variables with initial values
    const [formdata,setFormdata]=useState(initialvalues);
    const navigate=useNavigate();
    // creating function for navigation
    const handleClick=()=>{navigate('/');}
    // creating function  for changes in input fields
    const handleChange=(e)=>{setFormdata({...formdata,[e.target.name]: e.target.value})};
    // creating a function for posting the by user for registration
    const handleSubmit=()=>{
    axios.post('http://localhost:5000/api/createuser',JSON.stringify(formdata),{headers: {'Content-Type': 'application/json'}})
        .then((e)=>{setFormdata(initialvalues)}).then(alert("User Registration success"))}
  return (
    <div>
      <Card style={{ width: "50rem" }} className="container m-5">
        <CardBody>
          <CardTitle tag="h3">
            <h3>Welcome To Registration</h3>
          </CardTitle>
          <Form>
            <FormGroup>
              <Label for="name">firstName</Label>
              <Input
                id="name"
                name="firstname"
                value={formdata.firstname}
                placeholder="Enter your first name"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">lastName</Label>
              <Input
                id="name"
                name='lastname'
                value={formdata.lastname}
                placeholder="Enter your last name"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Mobile Number</Label>
              <Input
                id="name"
                name="mobile"
                value={formdata.mobile}
                placeholder="Enter your Mobile Number"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Email</Label>
              <Input
                id="name"
                name="email"
                value={formdata.email}
                placeholder="Enter Email Id"
                type="email"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Password</Label>
              <Input
                id="name"
                name="password"
                value={formdata.password}
                placeholder="Enter your password "
                type="password"
                onChange={handleChange}
              />
            </FormGroup>
            <Row>
            <Col md={6}>
            <Button onClick={handleSubmit}>Sign in</Button></Col>
            <Col md={6}><Button onClick={handleClick}>For Login</Button></Col></Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
