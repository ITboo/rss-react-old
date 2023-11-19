import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { openModal } from "../../app/redux/slices/detailsSlice";

import { CharacterProps } from "../../app/types/types";
import "./Card.css";

function Card({ data }: CharacterProps) {
  const { id, image, species, name } = data;
  const dispatch = useAppDispatch();

  return (
    <div
      className="card"
      onClick={() => dispatch(openModal(id))}
      data-testid="card"
    >
      <img src={image} alt={name} className="card__img" />
      <div className="card__info">
        <div className="card__title">{name}</div>
        <div className="card__species">{species}</div>
      </div>
    </div>
  );
}

export default Card;
