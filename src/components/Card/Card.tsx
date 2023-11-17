import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { openModal } from "../../app/redux/slices/detailsSlice";

import { CharacterProps } from "../../app/types/types";

function Card({ data }: CharacterProps) {
  const { id, image, species, name } = data;
  const dispatch = useAppDispatch();

  return (
    <div
      className="card"
      onClick={() => dispatch(openModal(id))}
      data-testid="card"
    >
      <div
        className="card__photo"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card__info">
        <div className="card__species">{species}</div>
        <div className="card__title">{name}</div>
      </div>
    </div>
  );
}

export default Card;
