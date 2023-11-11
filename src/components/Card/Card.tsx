import "./Card.css";

import { CharacterProps } from "../../app/types/types";
function Card({ data, openModal }: CharacterProps) {
  const { id, image, name } = data;

  return (
    <div className="card" onClick={() => openModal(id)} data-testid="card">
      <img className="card__img" src={image} />
      <div className="card__info">
        <div className="card__info-title">{name}</div>
      </div>
    </div>
  );
}

export default Card;
