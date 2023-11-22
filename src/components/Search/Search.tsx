import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useAppSelector } from "../../app/redux/hooks/hooks";
import { setSearchValue } from "../../app/redux/slices/searchSlice";

import { getUserQuery, setUserQuery } from "../../app/utils/localStorage";

import "./Search.css";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let query = getUserQuery();
    if (query === null) query = "";

    navigate(`/search/${query}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = useAppSelector((state) => {
    return state.search.searchValue;
  });

  const onUpdateSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value.trim();
    dispatch(setSearchValue(query));
  };

  const onSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();
    setUserQuery(search);
    navigate(`/search/${search}`);
  };

  return (
    <>
      <div className="search-form__wrapper">
        <form className="search-form">
          <input
            type="text"
            data-testid="my-input"
            placeholder="Search"
            value={search}
            onChange={onUpdateSearch}
          />
          <button
            className="search-btn"
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
