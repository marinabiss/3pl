import React, { Component } from "react"
import "../App.scss"
import vector from "../img/vector.png"
import renat from "../img/renat.jpg"
import david from "../img/david.jpg"
import marina from "../img/marina.jpg"
import michal from "../img/michal.jpg"
import roman from "../img/roman.jpg"
import alex from "../img/alex.jpg"
import vladimir from "../img/vladimir.jpeg"

export default class Team extends Component {
  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={vector} alt={"vector"} />
        <div className="home-text">
          <p>Our super team</p>
          <img className="img" src={renat} alt={"renat"} />
          <img className="img" src={david} alt={"david"} />
          <img className="img" src={marina} alt={"marina"} />
          <img className="img" src={michal} alt={"michal"} />
          <img className="img" src={vladimir} alt={"vladimir"} />
          <img className="img" src={alex} alt={"alex"} />
          <img className="img" src={roman} alt={"romant"} />
        </div>
      </div>
    )
  }
}
