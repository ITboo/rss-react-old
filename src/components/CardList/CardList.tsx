import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Pagination from "../Pagination/Pagination";
import Loader from "../../shared/Loader/Loader";
import Card from "../Card/Card";

import { useAppSelector } from "../../app/redux/hooks/hooks";
import { useGetCharactersQuery } from "../../app/redux/api/api";
import { setLoader } from "../../app/redux/slices/loaderSlice";

import { Character } from "../../app/types/types";
import "./CardList.css";

const CardList = () => {
  const dispatch = useDispatch();
  const charsOnPage = useAppSelector((state) => {
    return state.limit.charactersOnPage;
  });

  const { pageNum, characterId, queryParam } = useParams();

  const page = !pageNum ? 1 : pageNum;

  const { data, isLoading, isError, isFetching } = useGetCharactersQuery(
    characterId && pageNum
      ? `/?page=${page}`
      : (characterId && queryParam) || (!characterId && queryParam)
      ? `?name=${queryParam}`
      : `/?page=${page}`,
  );

  useEffect(() => {
    dispatch(setLoader(isFetching));
  }, [dispatch, isFetching]);

  const renderCharacters = (characters: Character[]) =>
    characters.map((char, index) => {
      const { name, image, id } = char;
      return <Card name={name} image={image} id={id} page={page} key={index} />;
    });

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return <h2>Loading error</h2>;
  }

  return (
    <>
      {data ? (
        <Pagination nextPage={data.info.next} prevPage={data.info.prev} />
      ) : null}
      <div className="cards">
        {data?.results && data.results?.length > 0 ? (
          renderCharacters(data.results.slice(0, charsOnPage))
        ) : (
          <h3>No characters</h3>
        )}
      </div>
    </>
  );
};

export default CardList;
