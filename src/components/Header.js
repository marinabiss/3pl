import React, { Component } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

import "../App.scss"

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="Navbar" fixed="top" collapseOnSelect expand="md" variant="dark">
          <Container id="cont">
            <Navbar.Toggle id="navbar-toggler" />
            <Navbar.Collapse id="responsive">
              <Nav id="menu">
                <Link to="/" id="nav-link">
                  About
                </Link>
                <Link to="/products" id="nav-link">
                  Products and services
                </Link>
                <Link to="/clients" id="nav-link">
                  Clients
                </Link>
                <Link to="/team" id="nav-link">
                  Team
                </Link>
                <Link to="/careers" id="nav-link">
                  Careers
                </Link>
                <Link to="/contact" id="nav-link">
                  Contact Us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
