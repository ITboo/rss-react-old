import { Component } from "react";
import { CardData } from "../../types/types";
import "./Card.css";

export default class Card extends Component<CardData> {
  constructor(props: CardData) {
    super(props);
  }
  render() {
    return (
      <div className="card__item" data-testid="card-container">
        <h3 className="card__item-title">{this.props.name}</h3>
        <div className="card__item-img">
          <img
            className="card__img"
            src={this.props.img}
            alt={this.props.name}
          />
        </div>
        <div className="card__item-details">
          <p className="card__item-desc">{this.props.description}</p>
        </div>
        <button className="card__item-btn">Show more</button>
      </div>
    );
  }
}
