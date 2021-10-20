import React, { Component } from "react"
import "../App.scss"
import { Container, Row, Card, Col } from "react-bootstrap"
import Page from "./Page"
import vector from "../img/vector.png"

import david from "../img/david.jpg"
import marina from "../img/marina.jpg"
import michal from "../img/michal.jpg"
import roman from "../img/roman.jpg"

import vladimir from "../img/vladimir.jpeg"

export default class Team extends Component {
  render() {
    return (
      <Page title="Team">
        <Container>
          <Row>
            <div className="wrapper">
              <img className="logo" src={vector} alt={"vector"} />
              <div className="home-text">
                <h5 style={{ textAlign: "center" }}>Meet Our Tteam</h5>
                <Container>
                  <Row>
                    <Col>
                      <Card style={{ marginTop: "20px", minWidth: "12rem", maxWidth: "75%", border: "none", borderRadius: "0", background: "transparent" }}>
                        <Card.Img style={{ borderRadius: "0" }} src={david} />
                        <Card.Text className="card-quote">"Everything should be made as simple as possible, but not simpler." </Card.Text>
                        <Card.Text className="card-txt">
                          <Card.Text className="card-name"> David Potashinsky </Card.Text> CTO, more than 20 years in the software industry
                        </Card.Text>
                      </Card>

                      <Card style={{ float: "right", marginTop: "40px", minWidth: "12rem", maxWidth: "75%", border: "none", borderRadius: "0", background: "transparent" }}>
                        <Card.Img style={{ borderRadius: "0" }} src={roman} />
                        <Card.Text className="card-quote">"You cannot change your destination overnight, but you can change your direction overnight."</Card.Text>
                        <Card.Text className="card-txt">
                          <Card.Text className="card-name"> Roman Sverdlov </Card.Text> RND director, five years logistic background, software engineer
                        </Card.Text>
                      </Card>

                      <Card style={{ marginTop: "40px", minWidth: "12rem", maxWidth: "75%", border: "none", borderRadius: "0", background: "transparent" }}>
                        <Card.Img style={{ borderRadius: "0" }} src={michal} />
                        <Card.Text className="card-quote">"Working hard and working smart sometimes might be two different things."</Card.Text>
                        <Card.Text className="card-txt">
                          <Card.Text className="card-name">Michal Potashinsky</Card.Text> CFO, CA, CPA, financial analyst
                        </Card.Text>
                      </Card>
                    </Col>
                    <Card style={{ float: "right", marginTop: "40px", minWidth: "12rem", maxWidth: "75%", border: "none", borderRadius: "0", background: "transparent" }}>
                      <Card.Img style={{ borderRadius: "0" }} src={vladimir} />
                      <Card.Text className="card-quote"> "All we have to decide is what to do with the time that is given to us."</Card.Text>
                      <Card.Text className="card-txt">
                        <Card.Text className="card-name">Vladimir Nizovsky </Card.Text> Development, UX analyst
                      </Card.Text>
                    </Card>

                    <Card style={{ marginTop: "40px", minWidth: "12rem", maxWidth: "75%", border: "none", borderRadius: "0", background: "transparent" }}>
                      <Card.Img style={{ borderRadius: "0" }} src={marina} />
                      <Card.Text className="card-quote">"Do the best you can until you know better. Then when you know better, do better." </Card.Text>
                      <Card.Text className="card-txt">
                        <Card.Text className="card-name"> Marina Bisliuk </Card.Text> Product analyst, graphic designer
                      </Card.Text>
                    </Card>
                  </Row>
                </Container>
              </div>
            </div>
          </Row>
        </Container>
      </Page>
    )
  }
}
