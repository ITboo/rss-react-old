import { useGetCharacterByIdQuery } from "../../app/redux/api/api";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { closeModal } from "../../app/redux/slices/detailsSlice";

import Loader from "../../shared/Loader/Loader";

import "./Details.css";

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
      <div className="details-card" data-testid="modal-card">
        <div
          className="close-btn"
          onClick={() => dispatch(closeModal())}
          data-testid="close"
        >
          ✖
        </div>
        <img
          src={currentData.image}
          alt={currentData.name}
          className="details-card__photo"
        />
        <div className="details__info">
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
    </>
  ) : (
    <div className="card modal"></div>
  );
}

export default DetailsCard;
