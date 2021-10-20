import React from "react"
import emailjs from "emailjs-com"
import "../App.scss"
import Page from "./Page"
import vector from "../img/vector.png"
import { Container, Form, Row, Button } from "react-bootstrap"

export default function Contact() {
  function sendEmail(e) {
    e.prevenDefault()
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", Form.current, "YOUR_USER_ID").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )

    e.target.reset()
  }

  return (
    <Page title="Contact">
      <Container>
        <Row style={{ minHeight: "90vh" }}>
          <div className="wrapper">
            <img className="logo" src={vector} alt={"vector"} />
            <Container className="home-text">
              <h5 style={{ textAlign: "center" }}>Contact us</h5>
              <Form ref={Form} onSubmit={sendEmail}>
                <Form.Group controlId="formBsicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text>We'll never share your email with anyone else</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Example textarea </Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="FormBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="light" type="submit">
                  submit
                </Button>
              </Form>
            </Container>
          </div>
        </Row>
      </Container>
    </Page>
  )
}
