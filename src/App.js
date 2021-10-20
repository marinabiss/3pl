import React from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import About from "./components/About"
import Products from "./components/Products"
import Clients from "./components/Clients"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Careers from "./components/Careers"
import Footer from "./components/Footer"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default App
