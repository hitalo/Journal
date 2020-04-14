import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

class MainNavbar extends Component {

    render() {
        return (
            <Styles>
                <Navbar bg="dark" expand="lg" variant="dark" className="navbar">
                    <Navbar.Brand href="/u">Journal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/u">Home</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/u/tests">Tests</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}

const Styles = styled.div`

`;

export default MainNavbar;