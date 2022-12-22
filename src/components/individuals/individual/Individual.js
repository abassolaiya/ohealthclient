import React from "react";
import "./individual.css"

function Individual(props) {
    const person = props.person
    const name = props.name;
    const details = props.details;
    const role = props.role
  return (
    <div className="indi">
      <div className="indi1">
      <img src={person} alt="Sponsors_image"/>
      <p className="individual_name">{name}</p>
      <p>{role}</p>
      <p className="individual__detail">{details}</p>
      </div>
    </div>
  )
}

export default Individual
