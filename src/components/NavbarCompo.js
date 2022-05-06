import React from 'react'
import { Badge, Container, Nav, Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";

function NavbarCompo() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img src={logo} style={{height: '4em'}} /> */}

                    </Navbar.Brand>

                    <InputGroup style={{ width: '10em' }}>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            <img style={{ height: '1.5em' }} src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale-2.png" />
                        </Button>
                    </InputGroup>

                    <Nav className="justify-content-end sans bold_font">
                        <Link to="/User" className="unlink white_text">
                            <Nav.Link href="User">
                                <img style={{ height: '1.5em' }} src="https://img.icons8.com/fluency-systems-filled/48/000000/user.png" />
                            </Nav.Link>
                        </Link>
                    </Nav>

                    <Navbar.Toggle aria-controls="basic-navbar-nav " className="justify-content-end" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto justify-content-end sans bold_font">
                            <Link to="/Dashboard" className="unlink white_text">
                                <Nav.Link href="Dashboard">Dashboard</Nav.Link>
                            </Link>

                            <Link to="/Explore" className="unlink">
                                <Nav.Link href="Explore">Explore</Nav.Link>
                            </Link>

                            <Link to="/Tools" className="unlink">
                                <Nav.Link href="Tools">Tools</Nav.Link>
                            </Link>

                            <Link to="/Social" className="unlink">
                                <Nav.Link href="Social">Social</Nav.Link>
                            </Link>

                            <Link to="/Help" className="unlink">
                                <Nav.Link href="Help">Help & Support</Nav.Link>
                            </Link>

                            <Link to="/About" className="unlink">
                                <Nav.Link href="About">About</Nav.Link>
                            </Link>

                            <Link to="/Register" className="unlink">
                                <Nav.Link href="Register">Register</Nav.Link>
                            </Link>

                            <Link to="/SignIn" className="unlink">
                                <Nav.Link href="SignIn">SignIn</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default NavbarCompo