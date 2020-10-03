import React from 'react'
import { Navbar, FormControl, InputGroup, Row, Col, Image } from 'react-bootstrap';
import Men from './menShopping1.jpg';
import Women from './womenShopping1.jpg'


function Header() {
    return (
        <div style={{
            backgroundColor: '#040b38',
            color: 'white',
        }} >
            <br></br>
            <Navbar  >
                <hr />
                <Navbar.Brand href="#home" style={{
                    color: 'white'
                }}><h3>lyst</h3></Navbar.Brand>
                <Navbar.Brand href="#home" style={{
                    color: 'white'
                }}><h4 style={{
                    color: 'white'
                }}><u>Men</u></h4></Navbar.Brand>
                <Navbar.Brand href="#home" style={{
                    color: 'white'
                }}><h4><u>Women</u></h4></Navbar.Brand>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><i class="fa fa-search"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby=""
                />
                </InputGroup>
                <i class="fas fa-2x fa-shopping-basket" ></i>
            </Navbar>
            <br></br>
            <br></br>
            <div class="text-center"><h1>Your fashion search starts here</h1></div>
            <br></br>
            <br></br>
            <Row >
                <Col><div class="d-flex justify-content-around"><Image src={Women} fluid /><Image src={Men} fluid /></div></Col>
                
            </Row>
            <br></br>
        </div>
    )
}

export default Header
