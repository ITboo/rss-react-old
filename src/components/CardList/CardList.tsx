import { Component } from "react";

import Card from "../Card/Card";
import { data } from "../../db/data";
import { CardData } from "../../types/types";

import "./CardList.css";

export default class CardList extends Component {
  generateCards() {
    return data.map((item: CardData) => {
      return (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          id={item.id}
          img={item.img}
        />
      );
    }) as JSX.Element[];
  }

  render() {
    return <ul className="cards__wrapper">{this.generateCards()}</ul>;
  }
}
