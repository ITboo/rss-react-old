import { Character } from "../../app/types/types";
function Card(data: Character) {
  const { image, gender, name } = data;

  return (
    <div className="card">
      <div
        className="card__img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card__info">
        <div className="card__info-gender">{gender}</div>
        <div className="card__info-title">{name}</div>
      </div>
    </div>
  );
}

export default Card;
