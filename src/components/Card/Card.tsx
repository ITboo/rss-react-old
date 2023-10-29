import { Component } from "react";
import { CardItem } from "../../types/types";
import "./Card.css";

type CardProps = {
  props: CardItem;
};

export default class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <div className="card__item" data-testid="card-container">
        <h3 className="card__item-title">{this.props.props.name}</h3>
        <div className="card__item-img">
          <img className="card__img" alt={this.props.props.name} />
        </div>
        <div className="card__item-details">
          <p className="card__item-desc">{this.props.props.order}</p>
        </div>
        <button className="card__item-btn">Show more</button>
      </div>
    );
  }
}
