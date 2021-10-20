import React, { Component } from "react"
import "../App.scss"
import Page from "./Page"
import vector from "../img/vector.png"
import { Container, Row } from "react-bootstrap"

export default class careers extends Component {
  render() {
    return (
      <Page title="Careers">
        <Container>
          <Row style={{ minHeight: "90vh" }}>
            <div className="wrapper">
              <img className="logo" src={vector} alt={"vector"} />
              <div className="home-text">
                <h5 style={{ textAlign: "center" }}>Powered by tech and driven by purpose</h5>{" "}
                <p>
                  {" "}
                  3PLCRM sees it as a mission to help small warehouses with everything they face once the business is scaling up and work getting more and more complicated. We are seeking for ambitious and energetic people to step into our
                  team and create the future look of logistic software. <ul>We are looking for:</ul>
                  <li>Product analyst Node.js </li>
                  <li>Developer React.js </li>
                  <li>Developer IT manager</li>
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </Page>
    )
  }
}
