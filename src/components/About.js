import React, { Component } from "react"
import Page from "./Page"
import vector from "../img/vector.png"
import { Container, Row } from "react-bootstrap"

export default class about extends Component {
  render() {
    return (
      <Page title="About">
        <Container>
          <Row style={{ minHeight: "90vh" }}>
            <div className="wrapper">
              <img className="logo" src={vector} alt={"vector"} />
              <div className="home-text">
                <p>The Logic CRM company is a young and dynamic software company. Our goal is helping to the logistic companies to simplify the processes.</p>
                <p>
                  {" "}
                  This is why using our wide knowledge in logistics and long experience in the computer industry, as a first goal, we are developing the software product that will help the small and medium-size logistic companies to
                  simplify flow.
                </p>{" "}
                <p>On a target in and outbound, locations, inventory, moving the items inside and between the wirehouses and many other parts of the logistic business, that today barely covered by the existing CRM systems.</p>
              </div>
            </div>
          </Row>
        </Container>
      </Page>
    )
  }
}
