import "./Card.css";

import { CharacterProps } from "../../app/types/types";
function Card({ data }: CharacterProps) {
  const { image, name } = data;

  return (
    <div className="card">
      <img className="card__img" src={image} />
      <div className="card__info">
        <div className="card__info-title">{name}</div>
      </div>
    </div>
  );
}

export default Card;
