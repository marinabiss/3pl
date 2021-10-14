import React, { Component } from "react"
import vector from "../img/vector.png"

export default class about extends Component {
  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={vector} alt={"vector"} />
        <div className="home-text">
          <p>LogicCRM is an IT company specialized in helping logistics businesses to get to anew level of computing efficiency. The focus of LogicCRM is on optimizing the available resources.</p>
          <p>Performance and reliability are the principal criteria for LogicCRM. Our goal is to focus on the needs of the operations of the logistic business or entire business flows.</p>
          <p>
            Thanks to very long experience in the computers industry and logistics, the major field the LogicCRM is helping the customers is to revise the computing-related processes, optimize the usage, and providing new solutions. As
            LogicCRM's specialty is cutting the expenseson information technology, at the end of the day, the customers are saving budgets and other resources.
          </p>
          <p>The LogicCRM services include but are not limited to system analysis, software development, outsourcing, personal training, and general business and individuals consulting.</p>
          <p>The advice of LogicCRM can involve a major change in the logistics business, affecting operations, organization structure, and culture. But, at the same time, those changes leading the business to its next level.</p>
          <p>LogicCRM works together with teams changing the computing force besides the habits and culture of the usage, making it more effective.</p>
          <p>
            Thanks to a deep understanding of the computer industry and experience in logistic operational flows, our current focus is on creating a computer system that should help small and medium-scale warehouses to simplify the
            processes. Simply, LogicCRM involvement will reduce the projects’ risk since we have the best combination of knowledge and experience than most businesses and individuals.
          </p>
        </div>
      </div>
    )
  }
}
