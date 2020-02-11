import React from 'react';
import logo from '../logo.svg';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

export default class Header extends React.Component{
  render(){
    return(<header className="App-header">
            <Navbar bg="light" expand="lg" fixed="top">
              <Navbar.Brand href="#home">
                <img src={logo} className="App-logo" alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/manga">Link</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </header>);
  }
}
