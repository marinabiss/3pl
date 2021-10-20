import React, { Component } from "react"
import "../App.scss"
import Page from "./Page"
import vector from "../img/vector.png"
import { Container, Row } from "react-bootstrap"

export default class clients extends Component {
  render() {
    return (
      <Page title="Clients">
        <Container>
          <Row style={{ minHeight: "90vh" }}>
            <div className="wrapper">
              <img className="logo" src={vector} alt={"vector"} />
              <div className="home-text">
                <p>As we are developing the software, helping the logistic companies, our clients and the pilots are warehouses.</p>
              </div>
            </div>
          </Row>
        </Container>
      </Page>
    )
  }
}
