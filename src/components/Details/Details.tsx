import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useGetCharacterByIdQuery } from "../../app/redux/api/api";
import { setDetails } from "../../app/redux/slices/detailsSlice";

import Loader from "../../shared/Loader/Loader";
import { ROUTE } from "../../app/constants/constants";
import { Character } from "../../app/types/types";

import "./Details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { characterId } = useParams();

  const {
    data: character,
    isLoading,
    isError,
    isFetching,
  } = useGetCharacterByIdQuery(Number(characterId));

  useEffect(() => {
    dispatch(setDetails(isFetching));
  }, [dispatch, isFetching]);

  const navigate = useNavigate();

  const errorMsg = isError ? <span>Oops</span> : null;
  const loader = isLoading ? <Loader /> : null;
  const details = !(isLoading || isError || !character) ? (
    <ShowDetails character={character} />
  ) : null;

  return (
    <div>
      <button
        className="character-title__button"
        data-testid="close-info"
        onClick={() => {
          navigate(ROUTE.MAIN);
        }}
      >
        X
      </button>
      {errorMsg}
      {loader}
      {details}
    </div>
  );
};

interface CharacterProps {
  character: Character;
}

const ShowDetails = (props: CharacterProps) => {
  const { name, status, gender, location, image, species } = props.character;
  return (
    <>
      <div className="character-title">
        <h2>Meet {name}!</h2>
      </div>
      <div className="character-img">
        <img src={image} alt={name} />
      </div>
      <div className="character-content__wrapper">
        <div className="character-content__detail">
          <div>
            <span className="detail-title">Gender</span> - {gender}
          </div>
          <div>
            <span className="detail-title">Status</span> - {status}
          </div>
          <div>
            <span className="detail-title">Location</span> - {location?.name}
          </div>
          <div>
            <span className="detail-title">Species</span> - {species}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
