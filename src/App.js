import React from "react"
import "./App.scss"
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="Home">
        <Header />

        <Footer />
      </div>
    </Router>
  )
}

export default App
