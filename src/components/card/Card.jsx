import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
  render() {
    const { id, name, email } = this.props.monsters;
    return (
      <div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
