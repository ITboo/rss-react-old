import { useEffect, useState } from "react";

import { Character } from "../../app/types/types";
import { API_URL } from "../../app/constants/constants";
import Loader from "../../shared/Loader/Loader";

import "./Details.css";

export interface DetailsProps {
  cardId: number;
  setModal: () => void;
}

function DetailsInfo({ cardId, setModal }: DetailsProps) {
  const [data, setData] = useState<Character>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/${cardId}`);
        const card: Character = await res.json();
        setData(card);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, [cardId]);

  return isLoading ? (
    <Loader />
  ) : data ? (
    <>
      <div className="details-card" data-testid="modal-card">
        <div className="close-btn" onClick={setModal} data-testid="close">
          ✖
        </div>
        <div className="details-card__wrapper">
          <img className="details-card__photo" src={data.image} width="300px" />
          <span>{data.name}</span>
          <span>{data.species}</span>
          <span>Status: {data.status} </span>
          <span>Gender: {data.gender} </span>
          <span>Origin: {data.origin.name} </span>
          <span>Location: {data.location.name}</span>
        </div>
      </div>
    </>
  ) : (
    <div className="error-msg">Error has occured</div>
  );
}

export default DetailsInfo;
