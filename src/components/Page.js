import React, { useEffect } from "react"
import { Container } from "react-bootstrap"

function Page(props) {
  useEffect(() => {
    document.title = `3PL CRM | ${props.title}`
    window.scrollTo(0, 0)
  }, [])

  return <Container wide={props.wide}>{props.children}</Container>
}

export default Page
