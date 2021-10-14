import React, { Component } from "react"
import "../App.scss"
import vector from "../img/vector.png"

export default class clients extends Component {
  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={vector} alt={"vector"} />
        <div className="home-text"></div>
      </div>
    )
  }
}
