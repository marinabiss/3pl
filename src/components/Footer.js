import React, { Component } from "react"
import "../App.scss"
import { Container } from "react-bootstrap"

export default class Footer extends Component {
  render() {
    return (
      <Container fluid style={{ height: "8vh", color: "#fff", marginTop: "20px" }}>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ textAlign: "center" }}>© Copyright 2021-2022 CRM Logic Limited. All rights reserved</p>
        </Container>
      </Container>
    )
  }
}
