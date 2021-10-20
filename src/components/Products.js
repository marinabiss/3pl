import React, { Component } from "react"
import "../App.scss"
import Page from "./Page"
import vector from "../img/vector.png"
import { Container, Row } from "react-bootstrap"

export default class products extends Component {
  render() {
    return (
      <Page title="Products">
        <Container>
          <Row style={{ minHeight: "90vh" }}>
            <div className="wrapper">
              <img className="logo" src={vector} alt={"vector"} />
              <div className="home-text">
                <p>We are working to develop a software system for the 3PL logistic business.</p>

                <p>After analyzing the existing CRM software, used in this kind of business we find out that there is no dedicated software for 3PL logistics.</p>

                <p>Follow the updates. We are working hard to make it done as quickly as we can.</p>
              </div>
            </div>
          </Row>
        </Container>
      </Page>
    )
  }
}
