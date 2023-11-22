import { Link } from "react-router-dom";
import { CharacterCardProps } from "../../app/types/types";

import "./Card.css";

const CharacterCard = (props: CharacterCardProps) => {
  const { name, image, page, id } = props;
  return (
    <Link to={`/page=${page}/characterId=${id}`}>
      <div className="card">
        <img className="card__img" src={image} alt={name} />
        <div className="card__title">{name}</div>
      </div>
    </Link>
  );
};

export default CharacterCard;
