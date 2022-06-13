import React, { Component } from "react";
import Card from "../card/Card";
import "./CardList.css";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monsters={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
