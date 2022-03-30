import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Img from '../Images/tryitoutlogo.jpeg'
const Nav = () => {
  return(
   <div>
 
 <Navbar>
  
  <img style={{ width: "35px" , margin: "2px" }} src={Img}></img>
    <Navbar.Brand href="#home">TryItOut.com</Navbar.Brand>
    <Navbar.Toggle />
    <span className="me-5" style={{paddingRight:215}}></span>
    <Form className="d-flex" style={{width:500}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>

    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text classname="me-4">
        Signed in as: <a href="#login">Admin</a>
      </Navbar.Text>
    </Navbar.Collapse>

</Navbar>
  </div>)
};

export default Nav;
