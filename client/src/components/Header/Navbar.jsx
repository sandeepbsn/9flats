import React from "react";
import './Navbar.css'
import { Navbar, Nav, Button } from "react-bootstrap";
function Navigation() {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src="https://assets.9flats.com/assets/new_home/logo-0aee51de5d08cfd71ad01d410e9b61ad821b8768f3c9de039f6bb6e48b792be7.svg"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/signin" bsPrefix="text-teal">Log in</Nav.Link>
                        <Navbar.Text bsPrefix="or">or</Navbar.Text>
                        <Nav.Link href="/signup" bsPrefix="text-teal">Sign up</Nav.Link>
                        <div className="placelistbtn">List a place</div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Navigation;