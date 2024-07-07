import React from "react"
import {Button}from "react-bootstrap"
import {Navbar}from "react-bootstrap"
import {Form}from "react-bootstrap"
import {Link}from "react-bootstrap"
import {Nav}from "react-bootstrap"
import {FormControl}from "react-bootstrap"


function Navbar1(){
    return(
        <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Golden Key</Navbar.Brand>
    <Nav className="mr-auto justify-content-end" >
    
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Construction</Nav.Link>
      <Nav.Link href="#pricing">Work Force</Nav.Link>
      <Nav.Link href="#pricing">Home Automation</Nav.Link>
      <Nav.Link href="#pricing">Material</Nav.Link>
      <Nav.Link href="#pricing">Food Forest</Nav.Link>
      <Nav.Link href="#pricing" class="justify-content-end" >PetMart</Nav.Link>
    


    </Nav>

  </Navbar>
              
              
        </div>
    )


}

export default Navbar1