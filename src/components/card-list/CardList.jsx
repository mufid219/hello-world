import React, { Component } from "react";

export class CardList extends Component {
  render() {
    return this.props.monsters.map((monsters) => {
      return (
        <div key={monsters.id}>
          <h1>{monsters.name}</h1>
        </div>
      );
    });
  }
}

export default CardList;
