import React, { Component } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import About from "../pages/About"
import Products from "../pages/Products"
import Clients from "../pages/Clients"
import Team from "../pages/Team"
import Contact from "../pages/Contact"
import Careers from "../pages/Careers"
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
                <Nav.Link id="nav-link" href="/">
                  About
                </Nav.Link>
                <Nav.Link id="nav-link" href="/products">
                  Products and services
                </Nav.Link>
                <Nav.Link id="nav-link" href="/clients">
                  Clients
                </Nav.Link>
                <Nav.Link id="nav-link" href="/team">
                  Team
                </Nav.Link>
                <Nav.Link id="nav-link" href="/careers">
                  Careers
                </Nav.Link>
                <Nav.Link id="nav-link" href="/contact">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
