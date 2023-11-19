import { useGetCharacterByIdQuery } from "../../app/redux/api/api";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { closeModal } from "../../app/redux/slices/detailsSlice";

import Loader from "../../shared/Loader/Loader";

function DetailsCard() {
  const cardId = useAppSelector((state) => state.modal.id);
  const { currentData, isFetching, isError } = useGetCharacterByIdQuery(cardId);

  const dispatch = useAppDispatch();

  return isFetching ? (
    <Loader />
  ) : isError ? (
    <div className="error">Failed</div>
  ) : currentData ? (
    <>
      <div className="card modal-card" data-testid="modal-card">
        <img
          src={currentData.image}
          alt={currentData.name}
          className="card__img"
        />
        <div className="card__info">
          <div className="card__title">{currentData.name}</div>
          <div className="card__species">{currentData.species}</div>
          <div>
            <span>Status: </span>
            {currentData.status}
          </div>
          <div>
            <span>Gender: </span>
            {currentData.gender}
          </div>
          <div>
            <span>Origin: </span>
            {currentData.origin.name}
          </div>
          <div>
            <span>Location: </span>
            {currentData.location.name}
          </div>
        </div>
      </div>
      <div
        className="close"
        onClick={() => dispatch(closeModal())}
        data-testid="close"
      >
        ✖
      </div>
    </>
  ) : (
    <div className="card modal"></div>
  );
}

export default DetailsCard;
